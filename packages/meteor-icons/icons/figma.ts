import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFigmaIcon],svg[meteor-icons-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8.5 9a1 1 0 0 1 0-7h7a1 1 0 0 1 0 7za1 1 0 0 0 0 7H12H8.5a1 1 0 0 0 0 7a3.5 3.5 0 0 0 3.5-3.5V2"></svg:path><svg:circle cx="15.5" cy="12.5" r="3.5"></svg:circle></svg:g>`,
})
export class MeteorIconsFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
