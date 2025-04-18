import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobiliteitluIcon],svg[arcticons-mobiliteitlu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.338 34.98V13.178l3.419.04l9.27 11.708l8.122-11.872l2.169.018l-.047 22.01c-.07.07-20.546 6.824-20.546 6.824C14.421 43.714 8.68 41.305 8.68 35.9V7.125c0-.315.208-1.678 1.562-1.623c0 0 26.137 1.799 29.08 2.226h0"></svg:path>`,
})
export class ArcticonsMobiliteitluIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
