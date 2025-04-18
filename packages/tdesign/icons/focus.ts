import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFocusIcon],svg[tdesign-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v3.062A8.004 8.004 0 0 1 19.938 11H23v2h-3.062A8.004 8.004 0 0 1 13 19.938V23h-2v-3.062A8.004 8.004 0 0 1 4.062 13H1v-2h3.062A8.004 8.004 0 0 1 11 4.062V1zm-1 5a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-2 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignFocusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
