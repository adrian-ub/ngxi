import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAppStoreIcon],svg[meteor-icons-app-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="11"></svg:circle><svg:path d="M5.5 14h7m.8-8.5L8.6 14M7 17l.3-.5m6.2-5.9L17 17m-1.6-3h3.1m-7.8-8.5L12 7.8"></svg:path></svg:g>`,
})
export class MeteorIconsAppStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
