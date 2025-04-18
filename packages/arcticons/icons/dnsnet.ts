import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDnsnetIcon],svg[arcticons-dnsnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.5s-5.518-8.942 0-18.5s0-18.5 0-18.5m-8 37s-5.518-8.942 0-18.5s0-18.5 0-18.5m16 37s-5.518-8.942 0-18.5s0-18.5 0-18.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 25.5S11.669 17.774 24 24s18.5-1.5 18.5-1.5M5.5 15s6.169-7.726 18.5-1.5S42.5 12 42.5 12m-37 24s6.169-7.726 18.5-1.5S42.5 33 42.5 33"></svg:path>`,
})
export class ArcticonsDnsnetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
