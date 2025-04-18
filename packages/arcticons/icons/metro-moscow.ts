import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetroMoscowIcon],svg[arcticons-metro-moscow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.725 32.067a16.03 16.03 0 0 1-4.83-11.49C7.905 11.693 15.114 4.497 24 4.5c8.893 0 16.328 7.204 16.1 16.085c-.101 4.139-1.152 7.722-3.96 10.556L23.9 43.501m-5.737-17.829v-11.64l5.835 11.652l5.836-11.641v11.64"></svg:path>`,
})
export class ArcticonsMetroMoscowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
