import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinNativescriptIcon],svg[catppuccin-nativescript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#91d7e3" stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.75q0 .75.75.75H6.5V8l3 3.5h1.25q.75 0 .75-.75v-1.5c0-.5.42-.92 1.25-1.25c-.83-.33-1.25-.75-1.25-1.25v-1.5q0-.75-.75-.75H9.5V8l-3-3.5H5.25q-.75 0-.75.75v1.5c0 .5-.42.92-1.25 1.25c.83.33 1.25.75 1.25 1.25zM4 1.5h8A2.5 2.5 0 0 1 14.5 4v8a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 12V4A2.5 2.5 0 0 1 4 1.5"></svg:path>`,
})
export class CatppuccinNativescriptIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
