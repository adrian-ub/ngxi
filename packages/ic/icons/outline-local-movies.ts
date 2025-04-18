import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineLocalMoviesIcon],svg[ic-outline-local-movies-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5v14h-4V5zm6-2h-2v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2zm-4 6V7h2v2zM6 9V7h2v2zm10 4v-2h2v2zM6 13v-2h2v2zm10 4v-2h2v2zM6 17v-2h2v2z"></svg:path>`,
})
export class IcOutlineLocalMoviesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
