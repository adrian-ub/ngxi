import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPointerTextIcon],svg[carbon-pointer-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13.71 12.29L7.41 6H13V4H4v9h2V7.41l6.29 6.3l1.42-1.42z" fill="currentColor"></svg:path><svg:path d="M28 30H12a2 2 0 0 1-2-2V18h2v10h16V12H18v-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z" fill="currentColor"></svg:path><svg:path d="M22 15h-5v2h5v2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6v-8a2 2 0 0 0-2-2zm0 8h-4v-2h4z" fill="currentColor"></svg:path>`,
})
export class CarbonPointerTextIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
