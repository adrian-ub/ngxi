import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSunSolidIcon],svg[la-sun-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v5h2V3zM7.5 6.094L6.094 7.5l3.531 3.563l1.438-1.438zm17 0l-3.563 3.531l1.438 1.438L25.906 7.5zM16 9c-3.855 0-7 3.145-7 7s3.145 7 7 7s7-3.145 7-7s-3.145-7-7-7m0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5M3 15v2h5v-2zm21 0v2h5v-2zM9.625 20.938L6.094 24.5L7.5 25.906l3.563-3.531zm12.75 0l-1.438 1.437l3.563 3.531l1.406-1.406zM15 24v5h2v-5z"></svg:path>`,
})
export class LaSunSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
