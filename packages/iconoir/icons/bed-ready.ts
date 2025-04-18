import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBedReadyIcon],svg[iconoir-bed-ready-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 16V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h9"></svg:path><svg:path d="M3 8h8V6m10 2h-8V6m3 14l2 2l4-4"></svg:path></svg:g>`,
})
export class IconoirBedReadyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
