import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdPeertubeAltIcon],svg[line-md-peertube-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 6.67L12 12L12 17.34z"><svg:animate fill="freeze" attributeName="d" dur="0.4s" values="M12 6.67L12 12L12 17.34z;M12 6.67L20 12L12 17.34z"></svg:animate></svg:path><svg:path d="M8 9.34L12 6.67L4 12z"><svg:animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M8 9.34L12 6.67L4 12z;M4 1.34L12 6.67L4 12z"></svg:animate></svg:path><svg:path d="M4 12L12 17.34L8 14.67z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M4 12L12 17.34L8 14.67z;M4 12L12 17.34L4 22.67z"></svg:animate></svg:path></svg:g>`,
})
export class LineMdPeertubeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
