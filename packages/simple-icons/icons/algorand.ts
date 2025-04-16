import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAlgorandIcon],svg[simple-icons-algorand-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.874 0h3.673l1.61 5.963h3.789l-2.588 4.5l3.624 13.533h-3.757l-2.44-9.077l-5.247 9.079H8.345l8.107-14.051l-1.304-4.878L4.215 24H.018Z"></svg:path>`,
})
export class SimpleIconsAlgorandIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
