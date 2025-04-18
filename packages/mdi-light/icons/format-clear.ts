import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatClearIcon],svg[mdi-light-format-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h9v1h-4L8.5 17h-1L12 5H8zM5 21v-1h8v1zm11.79-3.5L14 14.71l.71-.71l2.79 2.79L20.29 14l.71.71l-2.79 2.79L21 20.29l-.71.71l-2.79-2.79L14.71 21l-.71-.71z"></svg:path>`,
})
export class MdiLightFormatClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
