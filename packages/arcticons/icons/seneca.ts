import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSenecaIcon],svg[arcticons-seneca-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 19.525V2.507m5.164 16.329L39.198 8.802M28.475 24h17.018m-16.329 5.164l10.034 10.034M24 28.475v17.018m-5.164-16.329L8.802 39.198M19.525 24H2.507m16.329-5.164L8.802 8.802"></svg:path>`,
})
export class ArcticonsSenecaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
