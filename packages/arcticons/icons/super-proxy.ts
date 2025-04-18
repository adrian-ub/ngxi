import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSuperProxyIcon],svg[arcticons-super-proxy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.87 14.64H16.066V9.698L5.5 19.548l10.567 9.614v-4.79h15.225v-5.23L42.5 28.79l-11.208 9.512v-4.84H21.266"></svg:path>`,
})
export class ArcticonsSuperProxyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
