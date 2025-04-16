import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsVbulletinIcon],svg[simple-icons-vbulletin-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.09 10.316V24h21.82V0h-2.417l-5.461 19.613h-6.09l-3.134-9.246zm9.283-4.444l1.363 6.308L13.955 0H1.089v5.872Z"></svg:path>`,
})
export class SimpleIconsVbulletinIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
