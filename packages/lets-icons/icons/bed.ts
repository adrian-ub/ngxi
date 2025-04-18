import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBedIcon],svg[lets-icons-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 18V8.5A1.5 1.5 0 0 0 19.5 7h-4A1.5 1.5 0 0 0 14 8.5V18m-4 0v-6H4a1 1 0 0 0-1 1v5"></svg:path><svg:path d="M4 12h17v2H3v-1a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class LetsIconsBedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
