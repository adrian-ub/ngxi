import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightArrangeSendToBackIcon],svg[mdi-light-arrange-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5H4v5h5zm1 6H3V4h7zm3 10v-7h7v7zm1-1h5v-5h-5zm2-12v4h-1V9h-3V8zm-9 9v-4h1v3h3v1z"></svg:path>`,
})
export class MdiLightArrangeSendToBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
