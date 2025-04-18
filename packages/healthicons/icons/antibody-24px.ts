import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAntibody24pxIcon],svg[healthicons-antibody-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.276 7.79a1 1 0 1 0 1.448-1.38l-2-2.1a1 1 0 0 0-1.448 1.38z"></svg:path><svg:path d="M2.31 6.376a1 1 0 0 0-.034 1.414l3.295 3.46h7.592c.18-.391.495-.707.886-.886a1.8 1.8 0 0 1-.045-1.114H6.43L3.724 6.41a1 1 0 0 0-1.414-.034m10.853 6.374c.18.391.495.707.886.886a1.8 1.8 0 0 0-.045 1.114H6.43l-2.705 2.84a1 1 0 0 1-1.448-1.38l3.295-3.46zm2.671.285a2 2 0 0 1-.097-.235H14.8a.8.8 0 0 1-.279-.05a.8.8 0 0 1 .279-1.55h.937q.042-.12.097-.235l-.662-.662a.8.8 0 0 1 1.131-1.131l.662.662q.114-.056.235-.097V8.8a.8.8 0 0 1 1.6 0v.937q.12.042.235.097l.662-.662a.8.8 0 1 1 1.131 1.13l-.662.663q.055.114.097.235h.937a.8.8 0 0 1 0 1.6h-.937q-.042.12-.097.235l.662.662a.8.8 0 0 1-1.131 1.131l-.662-.662a2 2 0 0 1-.235.097v.937a.8.8 0 1 1-1.6 0v-.937a2 2 0 0 1-.235-.097l-.662.662a.8.8 0 0 1-1.131-1.131z"></svg:path><svg:path d="M6.276 16.21a1 1 0 1 1 1.448 1.38l-2 2.1a1 1 0 0 1-1.448-1.38z"></svg:path></svg:g>`,
})
export class HealthiconsAntibody24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
