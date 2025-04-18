import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsReplyAllIcon],svg[material-symbols-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 17l-6-6l6-6l1.425 1.4l-4.6 4.6l4.6 4.6zm12 2v-4q0-1.25-.875-2.125T17 12h-6.175l3.6 3.6L13 17l-6-6l6-6l1.425 1.4l-3.6 3.6H17q2.075 0 3.538 1.463T22 15v4z"></svg:path>`,
})
export class MaterialSymbolsReplyAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
