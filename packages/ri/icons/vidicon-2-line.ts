import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riVidicon2LineIcon],svg[ri-vidicon-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6V4H5V2h10v4h1a1 1 0 0 1 1 1v2.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm2 2H3v10h12zm2 4.359l4 2.8V8.84l-4 2.8zM5 10h2v2H5z"></svg:path>`,
})
export class RiVidicon2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
