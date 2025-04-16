import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsNomadIcon],svg[simple-icons-nomad-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.004 0l-10.4 6v12l10.392 6l10.4-6V6zm4.639 13.204l-2.77 1.6l-3.347-1.832v3.826l-3.144 1.995V10.8L9.88 9.272l3.462 1.823V7.191l3.301-1.984z"></svg:path>`,
})
export class SimpleIconsNomadIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
