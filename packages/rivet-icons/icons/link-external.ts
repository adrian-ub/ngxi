import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsLinkExternalIcon],svg[rivet-icons-link-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 1H9v2h2.586l-3 3L10 7.414l3-3V7h2z"></svg:path><svg:path d="M7 3H1v12h12V9h-2v4H3V5h4z"></svg:path></svg:g>`,
})
export class RivetIconsLinkExternalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
