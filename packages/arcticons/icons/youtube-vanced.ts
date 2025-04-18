import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYoutubeVancedIcon],svg[arcticons-youtube-vanced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.112 14.394a5 5 0 0 0-3.533-3.533c-2.314-.894-24.732-1.332-31.236.025A5 5 0 0 0 4.81 14.42c-1.045 4.583-1.124 14.491.026 19.177a5 5 0 0 0 3.533 3.533c4.583 1.055 26.371 1.203 31.236 0a5 5 0 0 0 3.533-3.533c1.114-4.993 1.193-14.287-.026-19.203"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m19.472 31.495l10.051-5.765c1.34-.768 1.34-2.701 0-3.47l-10.051-5.765"></svg:path><svg:path d="M25.103 23.475L20.37 20.76a.6.6 0 0 0-.899.521v5.428a.6.6 0 0 0 .899.52l4.732-2.713a.6.6 0 0 0 0-1.041"></svg:path></svg:g>`,
})
export class ArcticonsYoutubeVancedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
