import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsIndiehackersIcon],svg[simple-icons-indiehackers-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h24v24H0zm5.4 17.2h2.4V6.8H5.4zm4.8 0h2.4v-4h3.6v4h2.4V6.8h-2.4v4h-3.6v-4h-2.4z"></svg:path>`,
})
export class SimpleIconsIndiehackersIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
