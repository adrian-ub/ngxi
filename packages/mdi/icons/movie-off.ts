import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOffIcon],svg[mdi-movie-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.11 21.46l-1.27 1.27L18.11 20H4a2 2 0 0 1-2-2V6c0-.58.25-1.1.65-1.46L1.11 3l1.28-1.27zm-.23-2.78c.08-.21.12-.44.12-.68V4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l.8 1.6z"></svg:path>`,
})
export class MdiMovieOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
