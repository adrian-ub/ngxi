import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laHashtagIcon],svg[la-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5v6H5v2h6v6H5v2h6v6h2v-6h6v6h2v-6h6v-2h-6v-6h6v-2h-6V5h-2v6h-6V5zm2 8h6v6h-6z"></svg:path>`,
})
export class LaHashtagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
