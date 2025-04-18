import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8GpsDeviceIcon],svg[icons8-gps-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4.438l-.906 2.187l-8 19l-.907 2.125l2.157-.813L16 24.063l7.656 2.875l2.157.813l-.907-2.124l-8-19L16 4.436zm0 5.093l6.188 14.72l-5.844-2.187l-.344-.125l-.344.125l-5.844 2.188L16 9.53z"></svg:path>`,
})
export class Icons8GpsDeviceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
