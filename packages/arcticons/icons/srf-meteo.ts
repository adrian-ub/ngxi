import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSrfMeteoIcon],svg[arcticons-srf-meteo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M21.083 22.845V14.04h2.883c1.63 0 2.951 1.324 2.951 2.958s-1.321 2.957-2.951 2.957l2.883 2.89m-14.355-.965c.54.704 1.217.965 2.159.965h1.304a2.197 2.197 0 0 0 2.197-2.196v-.01a2.197 2.197 0 0 0-2.197-2.197h-1.438a2.2 2.2 0 0 1-2.2-2.2h0c0-1.216.987-2.203 2.204-2.203h1.297c.942 0 1.62.262 2.16.965m12.429 3.438h2.863m-2.863 4.403v-8.806h4.404"></svg:path><svg:path d="M8.5 9.908h31v17.069h-31z"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="4" height="5.3" x="34.574" y="32.792" rx="2" ry="2"></svg:rect><svg:path d="M9.427 34.792a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.3m-4-5.3v5.3m4-3.3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.3m8.798-6.95v5.95a1 1 0 0 0 1 1h.3m-2.35-5.3h2.1m-3.917 4.291a2 2 0 0 1-1.738 1.01h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v.65h-4m12.843 1.64a2 2 0 0 1-1.738 1.01h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v.65h-4"></svg:path></svg:g>`,
})
export class ArcticonsSrfMeteoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
