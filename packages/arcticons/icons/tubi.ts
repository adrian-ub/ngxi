import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTubiIcon],svg[arcticons-tubi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 42.5h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.365 20.384v4.962a3.007 3.007 0 0 0 3.007 3.007h0a3.007 3.007 0 0 0 3.008-3.007v-4.962"></svg:path><svg:circle cx="35.447" cy="16.699" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.447 20.384v7.969M11.5 17.902v7.444a3.007 3.007 0 0 0 3.008 3.007h.407M11.5 20.384h3.039m11.801 3.007a3.007 3.007 0 0 1 3.008-3.007h0a3.007 3.007 0 0 1 3.008 3.007v1.955a3.007 3.007 0 0 1-3.008 3.007h0a3.007 3.007 0 0 1-3.007-3.007m0 0v-9.023"></svg:path>`,
})
export class ArcticonsTubiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
