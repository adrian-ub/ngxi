import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsBurpsuiteIcon],svg[simple-icons-burpsuite-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v24h24V0Zm11.063 3.357h1.874v2.756L10.41 9.2h2.527v3.748h4.579l-4.578 5.592v2.104h-1.876v-2.758L13.59 14.8h-2.527v-3.75h-4.58l4.58-5.592Z"></svg:path>`,
})
export class SimpleIconsBurpsuiteIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
