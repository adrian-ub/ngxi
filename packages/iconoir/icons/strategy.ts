import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirStrategyIcon],svg[iconoir-strategy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 20.5C7 11 11.5 8 20 6"></svg:path><svg:path d="m15.909 3.81l4.486 2.09l-2.092 4.486M5 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m11 13.243l2.121-2.122m0 0L20.243 16m-2.122 2.121L16 16m2.121 2.121l2.122 2.122"></svg:path></svg:g>`,
})
export class IconoirStrategyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
