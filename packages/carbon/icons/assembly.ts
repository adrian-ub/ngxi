import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAssemblyIcon],svg[carbon-assembly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 25.4l-8-4.7v-9.4l8-4.7l8 4.7v9.4zm-6-5.8l6 3.5l6-3.5v-7.1L16 9l-6 3.5z"></svg:path><svg:path fill="currentColor" d="M27 8.2L17 2.3c-.3-.2-.6-.3-1-.3s-.7.1-1 .3L5 8.2c-.6.4-1 1-1 1.7v12.2c0 .7.4 1.4 1 1.7l10 5.9c.3.2.7.3 1 .3s.7-.1 1-.3l10-5.9c.6-.4 1-1 1-1.7V9.9c0-.7-.4-1.4-1-1.7m-1 13.9L16 28L6 22.1V9.9L16 4l10 5.9z"></svg:path>`,
})
export class CarbonAssemblyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
