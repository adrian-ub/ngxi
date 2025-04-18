import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideText28FilledIcon],svg[fluent-slide-text-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.004 7.75A3.75 3.75 0 0 1 5.754 4H22.25A3.75 3.75 0 0 1 26 7.75v12.5A3.75 3.75 0 0 1 22.25 24H5.755a3.75 3.75 0 0 1-3.75-3.75zM7.728 9A.73.73 0 0 0 7 9.728v.044c0 .402.326.728.728.728h5.544A.73.73 0 0 0 14 9.772v-.044A.73.73 0 0 0 13.272 9zM7 13.728v.044c0 .402.326.728.728.728h10.544a.73.73 0 0 0 .728-.728v-.044a.73.73 0 0 0-.728-.728H7.728a.73.73 0 0 0-.728.728M7.728 17a.73.73 0 0 0-.728.728v.044c0 .402.326.728.728.728h7.544a.73.73 0 0 0 .728-.728v-.044a.73.73 0 0 0-.728-.728z"></svg:path>`,
})
export class FluentSlideText28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
