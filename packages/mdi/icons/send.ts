import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSendIcon],svg[mdi-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 21l21-9L2 3v7l15 2l-15 2z"></svg:path>`,
})
export class MdiSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
