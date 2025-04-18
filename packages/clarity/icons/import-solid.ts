import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityImportSolidIcon],svg[clarity-import-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21a1 1 0 1 0 0 2h5v-2Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M28 4H14.87L8 10.86V21h7.2l-3.25-3.25a1 1 0 0 1 1.41-1.41L19 22l-5.68 5.68a1 1 0 0 1-1.41-1.41L15.23 23H8v7a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-12 8h-6v-.32L15.69 6H16Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityImportSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
