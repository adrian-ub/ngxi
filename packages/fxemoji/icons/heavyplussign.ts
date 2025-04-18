import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiHeavyplussignIcon],svg[fxemoji-heavyplussign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2B3B47" d="M468.433 210.554H301.446V43.567c0-17.164-13.914-31.079-31.079-31.079h-28.735c-17.164 0-31.079 13.914-31.079 31.079v166.987H43.567c-17.164 0-31.079 13.914-31.079 31.079v28.735c0 17.164 13.914 31.079 31.079 31.079h166.987v166.987c0 17.164 13.914 31.079 31.079 31.079h28.735c17.164 0 31.079-13.914 31.079-31.079V301.446h166.987c17.164 0 31.079-13.914 31.079-31.079v-28.735c-.001-17.164-13.916-31.078-31.08-31.078"></svg:path>`,
})
export class FxemojiHeavyplussignIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
