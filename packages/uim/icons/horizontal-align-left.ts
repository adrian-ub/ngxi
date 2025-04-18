import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimHorizontalAlignLeftIcon],svg[uim-horizontal-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10H4V6h11a1 1 0 0 1 1 1z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M21 18H4v-8h17a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1"></svg:path><svg:path fill="currentColor" d="M3 22a1 1 0 0 1-1-.999V3a1 1 0 0 1 2 0v18a1 1 0 0 1-.999 1z" opacity=".25"></svg:path>`,
})
export class UimHorizontalAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
