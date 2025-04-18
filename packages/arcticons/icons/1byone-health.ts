import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons1byoneHealthIcon],svg[arcticons-1byone-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.242 12.5c-1.613 4.509-7.971 23-7.971 23m16.917-22.628c-2.36 8.804-7.396 22.288-7.396 22.288"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.545 22.46c4.753-.988 13.572-2.962 20.91-3.114"></svg:path>`,
})
export class Arcticons1byoneHealthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
