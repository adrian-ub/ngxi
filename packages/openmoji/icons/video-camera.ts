import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiVideoCameraIcon],svg[openmoji-video-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="m55.281 53.184l1.561-.001v-.003z"></svg:path><svg:path fill="#D0CFCE" d="m56.927 51.183l-.087-18.976l-6.023.003l.084-9.246s-11.988.852-11.988.3l-.32-2.755l-23.302.201l-.16 35.427L50.6 56l.026-2.814l5.799-.006c-.549-.003.5-1.997.5-1.997"></svg:path><svg:path fill="#3F3F3F" d="M62.588 24.313L54.32 11.442l-2.921 5.403l-8.519 6.419l7.257.5l.866 6.554l5.797-4.576z"></svg:path><svg:path fill="#9B9B9A" d="M45.302 49.797V32.52a2.206 2.206 0 0 0-2.204-2.204H23.705V52H43.1a2.206 2.206 0 0 0 2.203-2.203"></svg:path><svg:circle cx="34.259" cy="43.337" r="5" fill="#D0CFCE"></svg:circle><svg:path fill="#3F3F3F" d="M11.838 20.597h3.453v18.74h-3.453z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="m57.577 25.129l-6.574 5.189m-7.105-7.354l7.113-5.402m0 .011l6.581 7.556l4.996-.816l-8.268-12.871zm-35.72 21.852v16.551h35.31V23.264H38.594v-2.755H15.521m39.258 12.704l2.063-.006v18.972l-2.063.006"></svg:path><svg:path d="M42.305 52H23.701V30.318h18.604a3 3 0 0 1 3 3V49a3 3 0 0 1-3 3"></svg:path><svg:circle cx="34.258" cy="43.337" r="5"></svg:circle><svg:path d="M11.666 20.509h3.626v18.916h-3.626z"></svg:path></svg:g>`,
})
export class OpenmojiVideoCameraIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
