import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMovieFilledIcon],svg[ix-movie-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 448H64V64h384zM328.96 256.001L192 324.481v-136.96z" clip-rule="evenodd"></svg:path>`,
})
export class IxMovieFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
