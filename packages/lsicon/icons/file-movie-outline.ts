import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFileMovieOutlineIcon],svg[lsicon-file-movie-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M3 4.5h10m-7 0l1-2m2 2l1-2m-7.5 11h11v-11h-11zm4-6.5l4 2l-4 2z"></svg:path>`,
})
export class LsiconFileMovieOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
