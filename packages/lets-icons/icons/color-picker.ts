import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsColorPickerIcon],svg[lets-icons-color-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="m8.5 5.5l10 10"></svg:path><svg:path stroke-linejoin="round" d="M14.5 4.5L4 15l-.5 5.5L9 20L19.5 9.5a3.536 3.536 0 0 0-5-5Z"></svg:path></svg:g>`,
})
export class LetsIconsColorPickerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
