import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityFolderOutlineBadgedIcon],svg[clarity-folder-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 13.5V29H6V13h7.31a2 2 0 0 0 2-2H6V7h6.49l2.61 3.59a1 1 0 0 0 .81.41h8.51a7.5 7.5 0 0 1-1.29-2h-6.71l-2.31-3.18A2 2 0 0 0 12.49 5H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V13.22a7.5 7.5 0 0 1-2 .28" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityFolderOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
