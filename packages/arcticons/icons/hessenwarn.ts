import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHessenwarnIcon],svg[arcticons-hessenwarn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.782 42.495a9.71 9.71 0 0 1 9.713-9.713v9.713zm-9.097-.002c0-10.387 8.42-18.808 18.808-18.808"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.647 42.498c0-15.382 12.47-27.851 27.851-27.851h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 42.5c0-20.435 16.565-37 37-37"></svg:path>`,
})
export class ArcticonsHessenwarnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
