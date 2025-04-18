import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWindowContentIcon],svg[system-uicons-window-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"></svg:path><svg:path fill="currentColor" d="M5.5 5.5h10a2 2 0 0 1 2 2v-2c0-1-.895-2-2-2h-10c-1.105 0-2 1-2 2v2a2 2 0 0 1 2-2"></svg:path><svg:path d="M7.498 10.5h1m-1-2h3.997m-3.997 4h5.997m-5.997 2h3.997"></svg:path></svg:g>`,
})
export class SystemUiconsWindowContentIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
