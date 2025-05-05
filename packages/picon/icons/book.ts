import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBookIcon],svg[picon-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v1h4V6m.5 1H7v1H3Q1 8 1 6V2q0-2 2-2h4v6h-.5"></svg:path>`,
})
export class PiconBookIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
