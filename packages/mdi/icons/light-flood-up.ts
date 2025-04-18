import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFloodUpIcon],svg[mdi-light-flood-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15H2v-2h6c.55 0 1 .45 1 1s-.45 1-1 1m8.72 3.9L10.69 4.08l-1.86.76l.38.92l-4.8 4.12l.86 2.12H8c1.1 0 2 .9 2 2s-.9 2-2 2H6.9l1.28 3.14l6.32-.41l.37.92zm4.09-1.19l-2.31-.96l.76-1.85l2.31.96zm-2.03-7.28L18 8.58l2.79-1.15l.76 1.85zm-3.59-5.36l-1.85-.76L14.3 2l1.85.77z"></svg:path>`,
})
export class MdiLightFloodUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
