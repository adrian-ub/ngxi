import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSuitcase3LineIcon],svg[ri-suitcase-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1a1 1 0 0 1 1 1v5h1V6h2v1h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1v1h-2v-1H7v1H5v-1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6h2v1h1V2a1 1 0 0 1 1-1zm4 8H5v10h14zM9 10v8H7v-8zm4 0v8h-2v-8zm4 0v8h-2v-8zm-3-7h-4v4h4z"></svg:path>`,
})
export class RiSuitcase3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
