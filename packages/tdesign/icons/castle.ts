import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCastleIcon],svg[tdesign-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2v2h2V2h2v2h2V2h2v2h2V2h2v12h2v-1h2v9H1v-9h2v1h2V2zM5 16H3v4h2zm2 4h2v-7h6v7h2V6H7zm12 0h2v-4h-2zm-6 0v-5h-2v5z"></svg:path>`,
})
export class TdesignCastleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
