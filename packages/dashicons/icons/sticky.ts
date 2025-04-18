import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsStickyIcon],svg[dashicons-sticky-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3.61V1.04l8.99-.01l-.01 2.58a2.74 2.74 0 0 0-2.16 2.67v.5c.01 1.31.93 2.4 2.17 2.66l-.01 2.58h-3.41l-.01 2.57c0 .6-.47 4.41-1.06 4.41c-.6 0-1.08-3.81-1.08-4.41v-2.56L5 12.02l.01-2.58a2.71 2.71 0 0 0 2.15-2.66v-.5c0-1.31-.92-2.41-2.16-2.67"></svg:path>`,
})
export class DashiconsStickyIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
