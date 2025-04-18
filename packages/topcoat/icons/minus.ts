import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatMinusIcon],svg[topcoat-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.5 21.5v-3c0-1.48-.43-2-2-2h-34c-1.48 0-2 .49-2 2v3c0 1.55.52 2 2 2h34c1.51 0 2-.48 2-2"></svg:path>`,
})
export class TopcoatMinusIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
