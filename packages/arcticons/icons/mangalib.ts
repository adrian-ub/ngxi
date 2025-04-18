import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMangalibIcon],svg[arcticons-mangalib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 18.5v-9a4 4 0 0 1 4-4h9m24 24v9a4 4 0 0 1-4 4h-9m-16-8.023V13.5l10.5 21l10.5-20.968V34.5"></svg:path>`,
})
export class ArcticonsMangalibIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
