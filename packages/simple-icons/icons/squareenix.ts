import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSquareenixIcon],svg[simple-icons-squareenix-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.723 0v24h20.554v-4.496H7.037V4.088h15.006V0zm9.751 9.46v4.497h8.584V9.459z"></svg:path>`,
})
export class SimpleIconsSquareenixIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
