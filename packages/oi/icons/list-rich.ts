import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiListRichIcon],svg[oi-list-rich-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v3h3V0zm4 0v1h4V0zm0 2v1h3V2zM0 4v3h3V4zm4 0v1h4V4zm0 2v1h3V6z"></svg:path>`,
})
export class OiListRichIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
