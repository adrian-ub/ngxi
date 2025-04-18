import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityFileOutlineBadgedIcon],svg[clarity-file-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.59 12.39v-5.9l1.07 1a7.3 7.3 0 0 1 0-2.82L21.89 4H7.83A1.88 1.88 0 0 0 6 5.91v24.18A1.88 1.88 0 0 0 7.83 32h20.34A1.88 1.88 0 0 0 30 30.09V13.5a7.45 7.45 0 0 1-3.91-1.11ZM28 30H8V6h12v8h8Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityFileOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
