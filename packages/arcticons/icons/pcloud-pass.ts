import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPcloudPassIcon],svg[arcticons-pcloud-pass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M36.05 24.174c.192-6.69-5.076-12.27-11.767-12.463s-12.27 5.076-12.463 11.767a12 12 0 0 0 0 .696"></svg:path><svg:path d="M13.242 18.115a9.1 9.1 0 0 0 .358 18.18h24a5.84 5.84 0 0 0 3.48-10.53h.05a6 6 0 0 0 .24-1.59a5.85 5.85 0 0 0-5.85-5.85q-.377.01-.75.063"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="19.508" cy="24.674" r="3.508"></svg:circle><svg:path d="M32 28.182v-3.508h0h-8.989m6.687 2.023v-2.023"></svg:path></svg:g>`,
})
export class ArcticonsPcloudPassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
