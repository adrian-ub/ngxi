import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiReplyCircleIcon],svg[mdi-reply-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2S2 6.5 2 12m3-1l5-5v3c5.06.73 7.28 4.33 8 8c-1.81-2.57-4.39-4-8-4v3z"></svg:path>`,
})
export class MdiReplyCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
