import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaciaMediaIcon],svg[arcticons-dacia-media-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 14.595H27.933L24 18.528l-3.933-3.933H4.5m0 10.387h15.567L24 21.049l3.933 3.933H43.5m-7.966 8.423l3.943-4.165l4.023 4.165m-9.707 0V29.24M4.5 33.253V29.24l4.05 2.053l4.05-2.053v4.067m11.467-4.067h5.86l2.124 2.13l-2.067 2.034h-5.917m-9.725-2.032h5.82m2.164-2.131h-5.86l-2.124 2.13l2.067 2.034h5.917"></svg:path>`,
})
export class ArcticonsDaciaMediaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
