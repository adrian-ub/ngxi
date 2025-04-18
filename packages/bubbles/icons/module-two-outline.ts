import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesModuleTwoOutlineIcon],svg[bubbles-module-two-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.723 13.033a1.5 1.5 0 0 0-.973 1.405v5.625a1.5 1.5 0 0 0 .973 1.4l4.5 1.687a1.5 1.5 0 0 0 1.054 0l4.5-1.687a1.5 1.5 0 0 0 .973-1.4v-5.625a1.5 1.5 0 0 0-.973-1.405l-4.5-1.687a1.5 1.5 0 0 0-1.054 0z"></svg:path><svg:path d="M1.008 13.597L6.75 15.75l5.742-2.153M6.75 15.75v7.5m16.2-19.4l-8.7 2.9l-8.7-2.9m8.7 2.9v3.75"></svg:path><svg:path d="M5.25 8.25v-3.5a1.5 1.5 0 0 1 1.026-1.423l7.5-2.5c.308-.103.64-.103.948 0l7.5 2.5A1.5 1.5 0 0 1 23.25 4.75v8.5a1.5 1.5 0 0 1-1.026 1.423l-6.474 2.158"></svg:path></svg:g>`,
})
export class BubblesModuleTwoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
