import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidPizzaSliceIcon],svg[fa6-solid-pizza-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M169.7.9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80h1.6c176.7 0 320 143.3 320 320v1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7.9m230.1 409.3c.1-3.4.2-6.8.2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8.1-10.2.2L.5 491.9c-1.5 5.5.1 11.4 4.1 15.4s9.9 5.6 15.4 4.1zM176 208a32 32 0 1 1 0 64a32 32 0 1 1 0-64m64 128a32 32 0 1 1 64 0a32 32 0 1 1-64 0M96 384a32 32 0 1 1 64 0a32 32 0 1 1-64 0"></svg:path>`,
})
export class Fa6SolidPizzaSliceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
