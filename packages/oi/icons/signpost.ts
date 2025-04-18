import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiSignpostIcon],svg[oi-signpost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v1H1L0 2l1 1h2v5h1V4h2l1-1l-1-1H4V0z"></svg:path>`,
})
export class OiSignpostIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
