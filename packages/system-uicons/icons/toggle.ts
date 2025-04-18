import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsToggleIcon],svg[system-uicons-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 7)"><svg:circle cx="3.5" cy="3.5" r="3"></svg:circle><svg:path d="M6 1.5h6.5c.828 0 2 .325 2 2s-1.172 2-2 2H6"></svg:path></svg:g>`,
})
export class SystemUiconsToggleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
