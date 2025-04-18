import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamGooglePlaySquareIcon],svg[jam-google-play-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.335 9.61l-1.817-1.05l-1.495 1.446l1.366 1.322l1.946-1.124a.34.34 0 0 0 .172-.297a.34.34 0 0 0-.172-.298zM12.21 8.38l-2-1.155l-4.384-2.25l4.95 4.793zM5.9 14.966l4.317-2.382l1.864-1.077l-1.304-1.263zM5.534 5.17l-.005 9.677l5.002-4.841z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamGooglePlaySquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
