import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFileMovieFilledIcon],svg[lsicon-file-movie-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM3 4V3h3.191l-.5 1zm3.809 0l.5-1h1.882l-.5 1zm3 0l.5-1H13v1zM6.724 6.553A.5.5 0 0 0 6 7v4a.5.5 0 0 0 .724.447l4-2a.5.5 0 0 0 0-.894z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7 7.809v2.382L9.382 9z"></svg:path>`,
})
export class LsiconFileMovieFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
