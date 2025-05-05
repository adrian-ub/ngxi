import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGroceryIcon],svg[picon-grocery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0c6 10-10 11-4 0h1v2h2V0"></svg:path>`,
})
export class PiconGroceryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
