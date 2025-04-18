import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBspbIcon],svg[arcticons-bspb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="17.59" r="13.06" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="24" cy="36.21" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="13.06" ry="3.64"></svg:ellipse><svg:ellipse cx="24" cy="42.66" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="13.06" ry=".87"></svg:ellipse>`,
})
export class ArcticonsBspbIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
