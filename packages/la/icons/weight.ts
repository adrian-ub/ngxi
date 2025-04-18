import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laWeightIcon],svg[la-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v20h24V6zm2 2h20v16H6zm10 2c-4.332 0-7.563 2.156-7.563 2.156l-.78.531l.5.813l3 5l.28.5h9.126l.28-.5l3-5l.5-.813l-.78-.53S20.331 10 16 10m0 2c2.824 0 4.688.906 5.594 1.406L19.469 17h-1.844l1.281-2.563l-1.812-.874L15.375 17h-2.844l-2.125-3.594C11.312 12.906 13.176 12 16 12"></svg:path>`,
})
export class LaWeightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
