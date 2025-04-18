import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phScribbleIcon],svg[ph-scribble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.67 189.66a14.61 14.61 0 0 0 0 20.68a8 8 0 0 1-11.32 11.32a30.64 30.64 0 0 1 0-43.32l9.38-9.37A14.63 14.63 0 0 0 183 148.28L116.28 215A30.63 30.63 0 0 1 73 171.72L171.72 73A14.63 14.63 0 0 0 151 52.28L84.28 119A30.63 30.63 0 0 1 41 75.72l41.34-41.38a8 8 0 0 1 11.31 11.32L52.27 87A14.63 14.63 0 0 0 73 107.72L139.72 41A30.63 30.63 0 0 1 183 84.28L84.28 183A14.63 14.63 0 0 0 105 203.72L171.72 137A30.63 30.63 0 0 1 215 180.28Z"></svg:path>`,
})
export class PhScribbleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
