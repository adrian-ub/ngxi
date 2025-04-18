import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBenchIcon],svg[mdi-bench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 13H1v2h2v4h2v-4h14v4h2v-4h2z"></svg:path>`,
})
export class MdiBenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
