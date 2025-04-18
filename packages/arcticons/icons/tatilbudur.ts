import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTatilbudurIcon],svg[arcticons-tatilbudur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.555 14.113v13.765a2.88 2.88 0 0 0 2.877 2.877h2.44m-8.339-11.51h8.338M23.825 25V14.113m0 10.887a5.755 5.755 0 1 0 5.755-5.755h-5.755M37.775 25h2.692m-5.092 5.795l1.903 1.903m-7.698.497v2.692m5.795-16.682l1.903-1.903m-7.698-.497v-2.692"></svg:path>`,
})
export class ArcticonsTatilbudurIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
