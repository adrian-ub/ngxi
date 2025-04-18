import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSpecialEffectsBrokenIcon],svg[solar-special-effects-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M6 8v-.75a.75.75 0 0 0-.75.75zm4 .75a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0-1.5zm8.6-4.3a.75.75 0 1 0-1.2-.9zm-7.2 7.1a.75.75 0 1 0 1.2.9zm1.2-8a.75.75 0 1 0-1.2.9zm4.8 8.9a.75.75 0 1 0 1.2-.9zM5.25 16a.75.75 0 0 0 1.5 0zM6 8.75h4v-1.5H6zm0 4h4v-1.5H6zm11.4-5.2l-3 4l1.2.9l3-4zm-3 4l-3 4l1.2.9l3-4zm-3-3.1l3 4l1.2-.9l-3-4zm3 4l3 4l1.2-.9l-3-4zM5.25 8v4h1.5V8zm0 4v4h1.5v-4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSpecialEffectsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
