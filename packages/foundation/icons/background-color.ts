import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationBackgroundColorIcon],svg[foundation-background-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M37.808 77.057L34.411 86h32.764l-3.397-8.943zm2.8-8.741h20.369L50.793 41.327z"></svg:path><svg:path d="M79 14H21c-3.85 0-7 3.15-7 7v58c0 3.85 3.15 7 7 7h2.111l20.812-52.766a2.595 2.595 0 0 1 2.476-1.836h8.812c1.152 0 2.118.753 2.462 1.79h.018L78.478 86H79c3.85 0 7-3.15 7-7V21c0-3.85-3.15-7-7-7"></svg:path></svg:g>`,
})
export class FoundationBackgroundColorIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
