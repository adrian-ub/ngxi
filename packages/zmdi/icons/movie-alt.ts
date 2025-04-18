import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMovieAltIcon],svg[zmdi-movie-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 0h42v384h-42v-43h-43v43H85v-43H43v43H0V0h43v43h42V0h171v43h43zM85 299v-43H43v43zm0-86v-42H43v42zm0-85V85H43v43zm214 171v-43h-43v43zm0-86v-42h-43v42zm0-85V85h-43v43z"></svg:path>`,
})
export class ZmdiMovieAltIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
