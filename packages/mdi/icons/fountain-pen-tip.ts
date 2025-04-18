import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFountainPenTipIcon],svg[mdi-fountain-pen-tip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.54 3.5l4.96 4.97l-1.43 1.41l-4.95-4.95zM3.5 19.78l6.5-6.47c-.1-.31-.03-.7.23-.96c.39-.39 1.03-.39 1.42 0c.39.4.39 1.03 0 1.42c-.26.26-.65.33-.96.23l-6.47 6.5l10.61-3.55l3.53-6.36l-4.94-4.95l-6.37 3.53z"></svg:path>`,
})
export class MdiFountainPenTipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
