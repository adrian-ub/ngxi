import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatNazarAmuletIcon],svg[fluent-emoji-flat-nazar-amulet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="fluentEmojiFlatNazarAmulet0" fill="#fff" d="M16.2 23.8a7.68 7.68 0 1 0 0-15.36a7.68 7.68 0 0 0 0 15.36"></svg:path></svg:defs><svg:g fill="none"><svg:path fill="#1345B7" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14"></svg:path><svg:use href="#fluentEmojiFlatNazarAmulet0"></svg:use><svg:use href="#fluentEmojiFlatNazarAmulet0"></svg:use><svg:path fill="#26C9FC" d="M16.2 21.24a5.12 5.12 0 1 0 0-10.24a5.12 5.12 0 0 0 0 10.24"></svg:path><svg:path fill="#212121" d="M16.2 18.68a2.56 2.56 0 1 0 0-5.12a2.56 2.56 0 0 0 0 5.12"></svg:path></svg:g>`,
})
export class FluentEmojiFlatNazarAmuletIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
