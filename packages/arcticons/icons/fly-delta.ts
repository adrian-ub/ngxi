import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlyDeltaIcon],svg[arcticons-fly-delta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.363 41.028l-6.841-19.55L40.5 7.5zM31.989 44.5l-8.23-20.258l-6.015 6.014z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.972 14.637L40.5 7.5L26.522 21.478zM3.5 16.011l14.244 14.245l6.014-6.014z"></svg:path>`,
})
export class ArcticonsFlyDeltaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
