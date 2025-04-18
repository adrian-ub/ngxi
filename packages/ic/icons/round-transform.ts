import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundTransformIcon],svg[ic-round-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16H9c-.55 0-1-.45-1-1V4h.79c.45 0 .67-.54.35-.85l-1.79-1.8c-.2-.2-.51-.2-.71 0l-1.79 1.8a.5.5 0 0 0 .36.85H6v2H3c-.55 0-1 .45-1 1s.45 1 1 1h3v8c0 1.1.9 2 2 2h8v2h-.79c-.45 0-.67.54-.35.85l1.79 1.79c.2.2.51.2.71 0l1.79-1.79c.32-.31.09-.85-.35-.85H18v-2h3c.55 0 1-.45 1-1s-.45-1-1-1m-5-2h2V8c0-1.1-.9-2-2-2h-6v2h5c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundTransformIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
