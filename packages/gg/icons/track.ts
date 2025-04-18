import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggTrackIcon],svg[gg-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path fill-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v1.07A7 7 0 0 1 18.93 11H20a1 1 0 1 1 0 2h-1.07A7 7 0 0 1 13 18.93V20a1 1 0 1 1-2 0v-1.07A7 7 0 0 1 5.07 13H4a1 1 0 1 1 0-2h1.07A7.005 7.005 0 0 1 11 5.07V4a1 1 0 0 1 1-1m-5 9a5 5 0 1 1 10 0a5 5 0 0 1-10 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgTrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
