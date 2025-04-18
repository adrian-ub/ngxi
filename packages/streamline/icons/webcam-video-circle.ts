import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWebcamVideoCircleIcon],svg[streamline-webcam-video-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="m10.135 5.25l-1.52.673v-.808a.54.54 0 0 0-.538-.539h-4.04a.54.54 0 0 0-.538.539v3.77a.54.54 0 0 0 .539.539h4.04a.54.54 0 0 0 .538-.539v-.808l1.519.673a.27.27 0 0 0 .366-.253V5.503a.27.27 0 0 0-.366-.254Z"></svg:path></svg:g>`,
})
export class StreamlineWebcamVideoCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
