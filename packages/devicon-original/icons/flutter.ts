import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalFlutterIcon],svg[devicon-original-flutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3FB6D3" d="M12.3 64.2L76.3 0h39.4L32.1 83.6zm64 63.8h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"></svg:path><svg:path fill="#27AACD" d="m81.6 93.9l-20-20l-19.4 19.6l19.4 19.6z"></svg:path><svg:path fill="#19599A" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"></svg:path><svg:lineargradient id="deviconOriginalFlutter0" x1="59.365" x2="86.825" y1="116.36" y2="99.399" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#1b4e94"></svg:stop><svg:stop offset=".63" stop-color="#1a5497"></svg:stop><svg:stop offset="1" stop-color="#195a9b"></svg:stop></svg:lineargradient><svg:path fill="url(#deviconOriginalFlutter0)" d="m61.6 113.1l30.8-8.4l-10.8-10.8z"></svg:path>`,
})
export class DeviconOriginalFlutterIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
