import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSoundbrennerIcon],svg[arcticons-soundbrenner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5v39m-4.988-28.57v18.14m9.976-18.14v18.14M14.023 19.692v8.616m19.954-8.616v8.616M9.035 21.733v4.535m29.93-4.535v4.535"></svg:path>`,
})
export class ArcticonsSoundbrennerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
