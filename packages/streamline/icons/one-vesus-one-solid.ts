import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOneVesusOneSolidIcon],svg[streamline-one-vesus-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 6a3 3 0 1 0 0-6a3 3 0 0 0 0 6m5.852 6.095l.103.307a1.306 1.306 0 0 0 2.537-.557l-.202-1.817a2.4 2.4 0 0 0-2.386-2.136H7.991c-1.223 0-2.25.92-2.386 2.136l-.202 1.816a1.306 1.306 0 0 0 2.538.558l.102-.307c.12-.359.455-.6.833-.6h1.143c.378 0 .714.241.833.6M4.362 9.89A3.65 3.65 0 0 1 6.16 7.135A5 5 0 0 0 0 12a.5.5 0 0 0 .5.5h3.696a2.6 2.6 0 0 1-.035-.793z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOneVesusOneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
