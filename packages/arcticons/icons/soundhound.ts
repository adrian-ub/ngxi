import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSoundhoundIcon],svg[arcticons-soundhound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.44 4.51a17.2 17.2 0 0 0-5 .56A16.69 16.69 0 0 0 14.77 33L9.1 38.59a16.91 16.91 0 0 0 28.22-7.5A16.68 16.68 0 0 0 33.06 15l5.67-5.6a17 17 0 0 0-11.29-4.89"></svg:path>`,
})
export class ArcticonsSoundhoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
