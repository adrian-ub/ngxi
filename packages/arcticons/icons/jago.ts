import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJagoIcon],svg[arcticons-jago-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.708 20.16l.023 9.415a4.245 4.245 0 0 1-3.997 4.47c-8.177.717-3.788-9.163-10.808-8.95c-4.558.475-5.11 5.342-3.448 9.268c5.452 14.443 27.147 10.675 27.251-3.681c.077-1.048.063-10.325.063-10.325c-.145-5.15-8.907-5.25-9.084-.197"></svg:path><svg:circle cx="14.073" cy="9.458" r="4.96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.998" cy="9.458" r="4.96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.927" cy="9.458" r="4.96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsJagoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
