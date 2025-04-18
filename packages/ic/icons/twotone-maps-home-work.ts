import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneMapsHomeWorkIcon],svg[ic-twotone-maps-home-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11h2v2h-2v2h2v2h-2v2h4V5h-9v1.4l5 3.57zm0-4h2v2h-2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M10 3v1.97l.96.69L12 6.4V5h9v14h-4v2h6V3z"></svg:path><svg:path fill="currentColor" d="M3 12v7h2v-5h6v5h2v-7L8 8.5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17 7h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM1 11v10h6v-5h2v5h6V11L8 6zm12 8h-2v-5H5v5H3v-7l5-3.5l5 3.5z"></svg:path>`,
})
export class IcTwotoneMapsHomeWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
