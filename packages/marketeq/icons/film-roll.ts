import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFilmRollIcon],svg[marketeq-film-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M22.813 17.708h.208M15.52 25h.21m7.29 7.292h-.207M30.104 25h.209"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M37.333 33.333a16.67 16.67 0 0 1-14.416 8.334H43.75a2.083 2.083 0 0 0 2.083-2.084v-4.166a2.083 2.083 0 0 0-2.083-2.084zM39.583 25a16.666 16.666 0 1 1-33.332 0a16.666 16.666 0 0 1 33.332 0"></svg:path></svg:g>`,
})
export class MarketeqFilmRollIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
