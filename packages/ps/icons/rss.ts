import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psRssIcon],svg[ps-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106 358q18 18 18 43t-18 43t-43 18t-43-18Q2 427 2 401q0-27 18-43q18-18 43-18t43 18M2 158v88q88 0 152 64q63 61 63 152h89q0-126-90-214q-88-90-214-90M2 2v88q154 0 263 109t109 263h88q0-94-35.5-178T327 137q-63-64-147-99.5T2 2"></svg:path>`,
})
export class PsRssIcon {
  readonly viewBox = input("0 0 464 488")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
