import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laTextHeightIcon],svg[la-text-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v2h7v18h2V8h7V6zm21 .625L21.5 11H24v10h-2.5l3.5 4.375L28.5 21H26V11h2.5z"></svg:path>`,
})
export class LaTextHeightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
