import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMicrophoneIcon],svg[icon-park-outline-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="16" height="28" x="16" y="4" stroke-linecap="round" stroke-linejoin="round" rx="8"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 21v3c0 7.732 6.268 14 14 14v0c7.732 0 14-6.268 14-14v-3M24 5v6m-8 5h5m6 0h5m-16 6h5m6 0h5"></svg:path><svg:path d="M24 38v6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 44h16"></svg:path></svg:g>`,
})
export class IconParkOutlineMicrophoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
