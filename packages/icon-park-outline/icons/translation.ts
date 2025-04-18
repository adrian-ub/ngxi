import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTranslationIcon],svg[icon-park-outline-translation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m17 32l2.188-5M31 32l-2.187-5m-9.625 0L24 16l4.813 11m-9.625 0h9.625"></svg:path><svg:path d="M43.2 20c-1.853-9.129-9.924-16-19.6-16S5.853 10.871 4 20l6-2M4 28c1.853 9.129 9.924 16 19.6 16s17.747-6.871 19.6-16L38 30"></svg:path></svg:g>`,
})
export class IconParkOutlineTranslationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
