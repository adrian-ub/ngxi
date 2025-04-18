import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiHeavydivisionsignIcon],svg[fxemoji-heavydivisionsign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2B3B47" d="M12.488 270.368v-28.735c0-17.164 13.914-31.079 31.079-31.079h424.866c17.164 0 31.079 13.914 31.079 31.079v28.735c0 17.164-13.914 31.079-31.079 31.079H43.567c-17.164-.001-31.079-13.915-31.079-31.079"></svg:path><svg:circle cx="256" cy="90.258" r="56.247" fill="#2B3B47"></svg:circle><svg:circle cx="256" cy="421.742" r="56.247" fill="#2B3B47"></svg:circle>`,
})
export class FxemojiHeavydivisionsignIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
