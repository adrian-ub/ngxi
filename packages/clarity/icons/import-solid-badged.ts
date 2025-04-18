import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityImportSolidBadgedIcon],svg[clarity-import-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21a1 1 0 1 0 0 2h5v-2Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"></svg:path><svg:path fill="currentColor" d="M22.5 6a7.5 7.5 0 0 1 .28-2h-7.91L8 10.86V21h7.2l-3.25-3.25a1 1 0 0 1 1.41-1.41L19 22l-5.68 5.68a1 1 0 0 1-1.41-1.41L15.23 23H8v7a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V13.5A7.5 7.5 0 0 1 22.5 6M16 12h-6v-.32L15.69 6H16Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityImportSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
