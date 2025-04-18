import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiDrinkingWater11Icon],svg[maki-drinking-water-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 11H3a.51.51 0 0 1-.5-.4L1 5.6a.5.5 0 0 1 .5-.6h5a.5.5 0 0 1 .5.6l-1.49 5A.51.51 0 0 1 5 11zM2.76 8h2.46l.67-2H2.11z" fill="currentColor"></svg:path><svg:path d="M4.5 0A1.5 1.5 0 0 0 3 1.51v2a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 5 3.5v-1a.5.5 0 0 1 .5-.5H10V0H4.5z" fill="currentColor"></svg:path>`,
})
export class MakiDrinkingWater11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
