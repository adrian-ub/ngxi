import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiLinkExternalLtrIcon],svg[ooui-link-external-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 1h-8l3.286 3.286L6 12l1.371 1.472l8.332-7.77l.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1"></svg:path>`,
})
export class OouiLinkExternalLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
