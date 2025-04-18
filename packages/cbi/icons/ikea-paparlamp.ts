import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiIkeaPaparlampIcon],svg[cbi-ikea-paparlamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.258 21.537v-1h2.833l.583-1.25l.584-1.25l.583 1.25l.583 1.25h2.834v2h-8zm0-12.5v-8.5h8v17h-8z"></svg:path>`,
})
export class CbiIkeaPaparlampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
