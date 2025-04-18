import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiProjectorScreenVariantOffOutlineIcon],svg[mdi-projector-screen-variant-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l3 3H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1v9h11.11l4.73 4.73zM7 16V9h.11l7 7zm5.2-7l-3-3H20c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1v6.8l-2-2V9z"></svg:path>`,
})
export class MdiProjectorScreenVariantOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
