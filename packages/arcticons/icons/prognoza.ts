import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrognozaIcon],svg[arcticons-prognoza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.894 24.166c1.388-9.906-3.846-19.15-12.686-20.706S6.796 6.29 6.796 21.408"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.848 18.76c12.419 0 21.85 5.273 27.244 9.43c-1.928 10.104-11.164 18.162-23.014 17.233c-11.85-.93-19.517-11.502-19.517-20.31c0 0 4.235-6.352 15.287-6.352"></svg:path>`,
})
export class ArcticonsPrognozaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
