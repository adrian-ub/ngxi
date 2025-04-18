import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYiIotIcon],svg[arcticons-yi-iot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="25.157" cy="16.716" r="11.219" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="26.524" cy="16.436" r="3.366" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.65 24.03c-1.011.044-10.067 1.405-10.036 9.997c.02 5.409 3.77 8.473 8.587 8.389l18.1.084c3.635-.084 7.94-2.21 8.081-7.126c.128-4.417-2.806-8.66-10.849-8.813"></svg:path>`,
})
export class ArcticonsYiIotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
