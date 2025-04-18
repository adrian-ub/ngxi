import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMessagePlusIcon],svg[mdi-message-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2zm-9 4v3H8v2h3v3h2v-3h3V9h-3V6z"></svg:path>`,
})
export class MdiMessagePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
