import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUsergroupIcon],svg[tdesign-usergroup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5a3 3 0 0 0 0 6v2a5 5 0 0 0-5 5v4H0v-4a7 7 0 0 1 3.75-6.2A5 5 0 0 1 7 3h1v2a5 5 0 0 1 4-2a4.99 4.99 0 0 1 4 2V3h1a5 5 0 0 1 3.25 8.8A7 7 0 0 1 24 18v4h-2v-4a5 5 0 0 0-5-5v-2a3 3 0 1 0 0-6h-1a5 5 0 1 1-8 0zm5 0a3 3 0 1 0 0 6a3 3 0 0 0 0-6M4 19a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v3H4zm5-3a3 3 0 0 0-3 3v1h12v-1a3 3 0 0 0-3-3z"></svg:path>`,
})
export class TdesignUsergroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
