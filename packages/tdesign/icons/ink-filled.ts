import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignInkFilledIcon],svg[tdesign-ink-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.2 8.5V3h11.6v5.5zM22 21v-6.5l-2.5-3.996h-15L2 14.5V21z"></svg:path>`,
})
export class TdesignInkFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
