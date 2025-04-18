import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTngoIcon],svg[arcticons-tngo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M20.778 20.92a8.723 8.723 0 1 1-3.193-3.192"></svg:path><svg:path d="M14.25 23.505a2.052 2.052 0 1 1-2.053 0l1.027 1.778zm21.553-.172a2.052 2.052 0 1 1-2.052 0l1.026 1.777z"></svg:path><svg:circle cx="34.777" cy="25.282" r="8.723"></svg:circle></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.667 19.84l5.774-3.334m7.001-2.256h6.667m-28.221-.256h6.668"></svg:path>`,
})
export class ArcticonsTngoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
