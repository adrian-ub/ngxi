import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGridCirclesIcon],svg[system-uicons-grid-circles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7.5" cy="7.5" r="2"></svg:circle><svg:circle cx="13.5" cy="7.5" r="2"></svg:circle><svg:circle cx="7.5" cy="13.5" r="2"></svg:circle><svg:circle cx="13.5" cy="13.5" r="2"></svg:circle></svg:g>`,
})
export class SystemUiconsGridCirclesIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
