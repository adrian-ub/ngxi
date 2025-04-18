import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsInfoSquareIcon],svg[proicons-info-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M8.25 3.75a4.5 4.5 0 0 0-4.5 4.5v7.5a4.5 4.5 0 0 0 4.5 4.5h7.5a4.5 4.5 0 0 0 4.5-4.5v-7.5a4.5 4.5 0 0 0-4.5-4.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 11.435v5"></svg:path><svg:circle cx="12" cy="8.06" r="1.25" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsInfoSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
