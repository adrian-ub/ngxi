import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMediumAltIcon],svg[arcticons-medium-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="13.979" cy="24" r="10.479" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="32.318" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.934" ry="10.479"></svg:ellipse><svg:ellipse cx="42.339" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.161" ry="10.479"></svg:ellipse>`,
})
export class ArcticonsMediumAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
