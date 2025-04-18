import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiLianeIcon],svg[cbi-liane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.2 11.2l.1 11l-4.4.8l-1.8-.2V11.9l3.7-.8l1.7-10l.6-.1l1.8.2z"></svg:path>`,
})
export class CbiLianeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
