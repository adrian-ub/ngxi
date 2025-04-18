import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsInfoIcon],svg[proicons-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 11.813v5"></svg:path><svg:circle cx="12" cy="8.438" r="1.25" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
