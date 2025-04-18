import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFileMovieIcon],svg[vaadin-file-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zM9 5h4v10H3V1h6zm1-1V1l3 3z"></svg:path><svg:path fill="currentColor" d="M10 10V8H4v5h6v-2l2 2V8z"></svg:path>`,
})
export class VaadinFileMovieIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
