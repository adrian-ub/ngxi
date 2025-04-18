import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAddSquareIcon],svg[proicons-add-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 8.5v7M8.5 12h7"></svg:path><svg:rect width="16.5" height="16.5" x="3.75" y="3.75" rx="4"></svg:rect></svg:g>`,
})
export class ProiconsAddSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
