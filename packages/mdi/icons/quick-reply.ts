import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiQuickReplyIcon],svg[mdi-quick-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13 18l-7-7l7-7v4c8 0 11 11 11 11s-3-5-11-5v4zm-6 0l-7-7l7-7v3l-4 4l4 4v3z" fill="currentColor"></svg:path>`,
})
export class MdiQuickReplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
