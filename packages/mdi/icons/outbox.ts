import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiOutboxIcon],svg[mdi-outbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14 14h-4v-3H8l4-4l4 4h-2v3m-9.01 1V5H19v10h-4a3 3 0 1 1-6 0H4.99M19 3H4.99c-1.104 0-1.98.895-1.98 2L3 19c0 1.105.886 2 1.99 2H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" fill="currentColor"></svg:path>`,
})
export class MdiOutboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
