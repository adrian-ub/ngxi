import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrebelMusicIcon],svg[arcticons-trebel-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.546 32.84V5.5h-8.078v29.544h0a7.457 7.457 0 0 0 7.457 7.456h5.705v-7.456h-2.88a2.203 2.203 0 0 1-2.204-2.203m11.597-14.68l-8.05-4.647v9.295zM14.91 13.514v9.295m-5.053-9.295v9.295"></svg:path>`,
})
export class ArcticonsTrebelMusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
