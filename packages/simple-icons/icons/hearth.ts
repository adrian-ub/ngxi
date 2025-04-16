import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsHearthIcon],svg[simple-icons-hearth-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.196 10.318v9.576L.453 24v-9.33zm7.659-4.162l7.692 4.162v9.573L15.853 24v-9.33l-7.658-4.352ZM8.196 0v9.576L.453 13.803V4.155Z"></svg:path>`,
})
export class SimpleIconsHearthIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
