import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiProjectorScreenVariantOffIcon],svg[mdi-projector-screen-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L16.11 18H5V9H4c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h.11l-3-3l1.28-1.27l19.72 19.73zM19 9h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H9.2l9.8 9.8z"></svg:path>`,
})
export class MdiProjectorScreenVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
