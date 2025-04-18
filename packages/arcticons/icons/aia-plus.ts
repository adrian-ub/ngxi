import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAiaPlusIcon],svg[arcticons-aia-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.716 20.975v6.05M31.69 24h6.05m-15.007 3.3l3.307-6.6l3.308 6.6m-1.095-2.186s-1.056.3-2.212.3c-1.155 0-2.211-.3-2.211-.3M10.26 27.3l3.307-6.6l3.307 6.6m-1.094-2.186s-1.057.3-2.212.3s-2.212-.3-2.212-.3m8.449-4.414v6.6"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsAiaPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
