import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHttpIcon],svg[carbon-http-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 11h-5v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3zm-17-3h2v8h2v-8h2v-2h-6zm13-2h-6v2h2v8h2v-8h2zM6 11v4H3v-4H1v10h2v-4h3v4h2V11z"></svg:path>`,
})
export class CarbonHttpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
