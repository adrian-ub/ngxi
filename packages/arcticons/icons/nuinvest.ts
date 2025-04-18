import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNuinvestIcon],svg[arcticons-nuinvest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 14.007v11.248c0 4.083-2.857 7.37-6.406 7.37s-6.406-3.287-6.406-7.37V14.007h-4.85v13.025c0 4.084 2.857 7.37 6.406 7.37h0c3.548 0 6.406-3.286 6.406-7.37V14.006zm-39 19.985V22.744c0-4.083 2.858-7.37 6.407-7.37s6.405 3.287 6.405 7.37v11.248h4.85V20.968c0-4.084-2.857-7.37-6.406-7.37h0c-3.548 0-6.406 3.286-6.406 7.37v13.026z"></svg:path>`,
})
export class ArcticonsNuinvestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
