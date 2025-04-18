import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightConsoleIcon],svg[mdi-light-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4h13a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2h17a2 2 0 0 0-2-2zM3 18a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8H3zm14 0h-5v-1h5zM6 10.5l.71-.71l4.2 4.21l-4.2 4.21L6 17.5L9.5 14z"></svg:path>`,
})
export class MdiLightConsoleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
