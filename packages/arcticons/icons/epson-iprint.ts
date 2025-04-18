import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEpsonIprintIcon],svg[arcticons-epson-iprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.495 20.75v7.029l-5.887-.015A2.11 2.11 0 0 1 4.5 25.655V14.377c0-1.164.944-2.108 2.108-2.108h34.784c1.164 0 2.108.944 2.108 2.108v11.278a2.11 2.11 0 0 1-2.108 2.108l-6.278.022l-.019-7.035"></svg:path><svg:path d="M30.635 22.628h-13.43a2.11 2.11 0 0 0-2.107 2.108v8.887c0 1.164.944 2.108 2.108 2.108h13.429a2.11 2.11 0 0 0 2.108-2.108v-8.887a2.11 2.11 0 0 0-2.108-2.108M4.527 20.609h38.75m-25.452 5.354h12.087m-12.087 3.186h12.087m-12.087 3.186h12.087m-3.659-18.472h-4.665a2.11 2.11 0 0 0-2.108 2.108v.92c0 1.164.944 2.108 2.108 2.108h4.664a2.11 2.11 0 0 0 2.109-2.108v-.92a2.11 2.11 0 0 0-2.108-2.108"></svg:path></svg:g>`,
})
export class ArcticonsEpsonIprintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
