import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsLitIcon],svg[simple-icons-lit-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.4 9.6l4.8 4.8V24l-4.8-4.8zm4.8-4.8v9.6L12 9.6V0zM12 9.6v9.6l4.8-4.8V4.8zm4.8 4.8V24l4.8-4.8V9.6z"></svg:path>`,
})
export class SimpleIconsLitIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
