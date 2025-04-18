import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feBrushIcon],svg[fe-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.261 16.011A2 2 0 0 0 7.99 18.74A2.5 2.5 0 0 1 5.5 21H3v-2.5a2.5 2.5 0 0 1 2.261-2.489M19 3c1.1 0 2 1.006 2 2L8 18l-2-2z"></svg:path>`,
})
export class FeBrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
