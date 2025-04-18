import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMytMuzikIcon],svg[arcticons-myt-muzik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 26.775l7.888-11.539l10.021 11.11m3.182-4.911l10.021 11.11L43.5 21.006"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.014 21.995l10.022 11.11l11.782-18.21l10.16 11.263"></svg:path>`,
})
export class ArcticonsMytMuzikIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
