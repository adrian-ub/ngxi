import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconClearAllIcon],svg[codicon-clear-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 12.6l.7.7l1.6-1.6l1.6 1.6l.8-.7L13 11l1.7-1.6l-.8-.8l-1.6 1.7l-1.6-1.7l-.7.8l1.6 1.6zM1 4h14V3H1zm0 3h14V6H1zm8 2.5V9H1v1h8zM9 13v-1H1v1z"></svg:path>`,
})
export class CodiconClearAllIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
