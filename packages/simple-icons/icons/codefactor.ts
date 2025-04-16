import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsCodefactorIcon],svg[simple-icons-codefactor-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.375 2.65a2.64 2.64 0 0 1-2.62 2.65a2.64 2.64 0 0 1-2.63-2.65A2.64 2.64 0 0 1 2.755 0a2.64 2.64 0 0 1 2.62 2.65m0 9.35a2.64 2.64 0 0 1-2.62 2.65A2.64 2.64 0 0 1 .125 12a2.64 2.64 0 0 1 2.63-2.65A2.64 2.64 0 0 1 5.375 12m0 9.35A2.64 2.64 0 0 1 2.755 24a2.64 2.64 0 0 1-2.63-2.65a2.64 2.64 0 0 1 2.63-2.65a2.64 2.64 0 0 1 2.62 2.65M11.315 0a2.64 2.64 0 0 0-2.61 2.65a2.64 2.64 0 0 0 2.6 2.65h9.94a2.64 2.64 0 0 0 2.63-2.65A2.64 2.64 0 0 0 21.255 0zm-2.61 12a2.64 2.64 0 0 1 2.62-2.65h5.68a2.64 2.64 0 0 1 2.6 2.65a2.64 2.64 0 0 1-2.6 2.65h-5.7a2.64 2.64 0 0 1-2.6-2.65"></svg:path>`,
})
export class SimpleIconsCodefactorIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
