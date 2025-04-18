import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOffOutlineIcon],svg[mdi-movie-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3l1.54 1.54C2.25 4.9 2 5.42 2 6v12a2 2 0 0 0 2 2h14.11l2.73 2.73l1.27-1.27zM4 18V6.47L5.76 10h2.35l8 8zM8.8 5.6L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v14c0 .24-.04.47-.12.68L20 16.8V10h-6.8z"></svg:path>`,
})
export class MdiMovieOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
