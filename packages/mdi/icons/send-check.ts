import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSendCheckIcon],svg[mdi-send-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v7l15 2l-15 2v7l21-9m-1 3.5L18.5 19l-2-2l-1.5 1.5l3.5 3.5l5-5Z"></svg:path>`,
})
export class MdiSendCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
