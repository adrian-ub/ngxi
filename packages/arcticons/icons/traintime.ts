import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTraintimeIcon],svg[arcticons-traintime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.077 11.704h27.846v5.056H10.077zm0 9.768h27.846v5.056H10.077zM37.15 7h-26.3m-.773 24.239h27.846v5.056H10.077zM10.85 41h26.3m-22.19 2.51V4.49M33.27 43.4V4.6"></svg:path><svg:circle cx="24.001" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsTraintimeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
