import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSendVariantIcon],svg[mdi-send-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8Z"></svg:path>`,
})
export class MdiSendVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
