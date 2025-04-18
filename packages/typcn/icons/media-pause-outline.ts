import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnMediaPauseOutlineIcon],svg[typcn-media-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 1.654-1.346 3-3 3M8 7c-.552 0-1 .449-1 1v9a1.001 1.001 0 0 0 2 0V8c0-.551-.448-1-1-1m7 13c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 1.654-1.346 3-3 3m0-13c-.552 0-1 .449-1 1v9a1.001 1.001 0 0 0 2 0V8c0-.551-.448-1-1-1"></svg:path>`,
})
export class TypcnMediaPauseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
