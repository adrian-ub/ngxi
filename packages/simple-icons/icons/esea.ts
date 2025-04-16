import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsEseaIcon],svg[simple-icons-esea-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.054 2.767L8.95 9.511L0 9.65l5.832 4.47L1.042 21l8.491-4.088l5.711 4.322V14.12L24 9.796l-17.255 4.02a12.6 12.6 0 0 0 1.589-1.955a5.5 5.5 0 0 0 .617-1.786l5.593-.15z"></svg:path>`,
})
export class SimpleIconsEseaIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
