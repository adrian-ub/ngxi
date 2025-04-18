import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPcloudIcon],svg[arcticons-pcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.05 24.174c.192-6.69-5.076-12.27-11.767-12.463s-12.27 5.076-12.463 11.767a12 12 0 0 0 0 .696"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.242 18.115a9.1 9.1 0 0 0 .358 18.18h24a5.84 5.84 0 0 0 3.48-10.53h.05a6 6 0 0 0 .24-1.59a5.85 5.85 0 0 0-5.85-5.85q-.377.01-.75.063"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.24 30.044v-10.74h3.49a3.63 3.63 0 0 1 0 7.25h-3.49"></svg:path>`,
})
export class ArcticonsPcloudIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
