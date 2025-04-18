import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsColorPaletteIcon],svg[arcticons-color-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15 23.5h25.5a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H15c-5.243 0-9.5-4.257-9.5-9.5h0c0-5.243 4.257-9.5 9.5-9.5"></svg:path><svg:circle cx="15" cy="33" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 33H5.504M18.5 33h24m-19.742 9.5v-19m10 0v19M8.283 39.718a9.5 9.5 0 0 1 0-13.436l18.03-18.03a2 2 0 0 1 2.83 0l10.606 10.606a2 2 0 0 1 0 2.828L37.935 23.5m-13.435 0l9.945-9.945m-13.606.171l9.774 9.774"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15 42.5A9.5 9.5 0 0 1 5.5 33V7.5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v2.565m-9.5 9.5V5.5m-9.5 9.742h13.823"></svg:path>`,
})
export class ArcticonsColorPaletteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
