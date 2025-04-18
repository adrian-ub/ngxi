import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiReplyAllIcon],svg[mdi-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9V5l-7 7l7 7v-4.1c5 0 8.5 1.6 11 5.1c-1-5-4-10-11-11M7 8V5l-7 7l7 7v-3l-4-4z"></svg:path>`,
})
export class MdiReplyAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
