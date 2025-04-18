import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsCricketOutlineSharpIcon],svg[material-symbols-sports-cricket-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 17.7L1.625 7.825l4.2-4.2L15.7 13.5zm0-2.8l1.4-1.4l-7.1-7.1l-1.4 1.4zm7.1 7.1l-4.25-4.25l1.4-1.4L20 20.6zm-.1-13q-1.45 0-2.475-1.025T15 5.5t1.025-2.475T18.5 2t2.475 1.025T22 5.5t-1.025 2.475T18.5 9m0-2q.625 0 1.063-.437T20 5.5t-.437-1.062T18.5 4t-1.062.438T17 5.5t.438 1.063T18.5 7m-9.85 3.65"></svg:path>`,
})
export class MaterialSymbolsSportsCricketOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
