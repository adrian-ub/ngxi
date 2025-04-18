import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAtFill12Icon],svg[garden-at-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 4v2h0a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2h0a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2h0v.5A1.5 1.5 0 0 0 9.5 8h0A1.5 1.5 0 0 0 11 6.5V6h0a5 5 0 0 0-5-5h0a5 5 0 0 0-5 5h0a5 5 0 0 0 5 5h2"></svg:path>`,
})
export class GardenAtFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
