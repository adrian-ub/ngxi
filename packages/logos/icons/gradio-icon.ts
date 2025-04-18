import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosGradioIconIcon],svg[logos-gradio-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosGradioIcon0" x1="-6.452%" x2="85.236%" y1="49.784%" y2="49.784%"><svg:stop offset="0%" stop-color="#F9D100"></svg:stop><svg:stop offset="100%" stop-color="#F97700"></svg:stop></svg:lineargradient><svg:lineargradient id="logosGradioIcon1" x1="106.079%" x2="14.268%" y1="49.784%" y2="49.784%"><svg:stop offset="0%" stop-color="#F9D100"></svg:stop><svg:stop offset="100%" stop-color="#F97700"></svg:stop></svg:lineargradient><svg:lineargradient id="logosGradioIcon2" x1="-12.871%" x2="169.796%" y1="75.863%" y2="74.878%"><svg:stop offset="0%" stop-color="#F9D100"></svg:stop><svg:stop offset="100%" stop-color="#F97700"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosGradioIcon0)" d="M119.871 64.78a16.35 16.35 0 0 1 16.258 0l111.654 64c10.956 6.28 10.956 22.083 0 28.363l-111.654 64a16.35 16.35 0 0 1-16.258 0l-111.654-64c-10.956-6.28-10.956-22.083 0-28.364zm8.126 33.014l-78.783 45.164l78.783 45.155l78.784-45.155z"></svg:path><svg:path fill="url(#logosGradioIcon1)" d="M119.871 2.165a16.35 16.35 0 0 1 16.258 0l111.654 64c10.956 6.28 10.956 22.083 0 28.363l-111.654 64a16.35 16.35 0 0 1-16.258 0l-111.654-64c-10.956-6.28-10.956-22.083 0-28.363zm8.126 33.015L49.214 80.343l78.783 45.156l78.784-45.156z"></svg:path><svg:path fill="url(#logosGradioIcon2)" d="m120.19 64.755l16.174 28.412l-111.93 63.723l-16.175-28.412z"></svg:path>`,
})
export class LogosGradioIconIcon {
  readonly viewBox = input("0 0 256 224")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
