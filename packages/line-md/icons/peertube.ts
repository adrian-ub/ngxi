import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdPeertubeIcon],svg[line-md-peertube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdPeertube0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" d="M12 12L12 12L12 12z"><svg:animate fill="freeze" attributeName="d" dur="0.4s" values="M12 12L12 12L12 12z;M4 1.34L20 12L4 22.67z"></svg:animate></svg:path><svg:path fill="#000" d="M12 6.67v10.67l-8 -5.34Z"></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdPeertube0)"></svg:rect>`,
})
export class LineMdPeertubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
