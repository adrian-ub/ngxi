import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsLightningBoxIcon],svg[rivet-icons-lightning-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.5 4L5 9h2v3h.5L11 7H9V4z"></svg:path><svg:path d="M15 1H1v14h14zM3 13V3h10v10z"></svg:path></svg:g>`,
})
export class RivetIconsLightningBoxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
