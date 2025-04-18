import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAtherIcon],svg[arcticons-ather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="17.336" cy="28.845" r="4.336" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.997 14.94l6.541 12.39a3.99 3.99 0 0 1-1.666 5.392a3.99 3.99 0 0 1-5.382-1.67L20.95 18.66a3.98 3.98 0 0 1 1.661-5.377a3.983 3.983 0 0 1 5.386 1.657"></svg:path>`,
})
export class ArcticonsAtherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
