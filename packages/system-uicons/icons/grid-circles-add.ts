import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGridCirclesAddIcon],svg[system-uicons-grid-circles-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="13.5" cy="7.5" r="2"></svg:circle><svg:circle cx="7.5" cy="7.5" r="2"></svg:circle><svg:circle cx="7.5" cy="13.5" r="2"></svg:circle><svg:path d="M13.5 11.5v4m2-2h-4"></svg:path></svg:g>`,
})
export class SystemUiconsGridCirclesAddIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
