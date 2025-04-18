import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFurAffinityNocIcon],svg[arcticons-fur-affinity-noc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="23.915" cy="32.457" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="11.464" ry="9.129"></svg:ellipse><svg:ellipse cx="23.915" cy="13.861" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.449" ry="7.447"></svg:ellipse><svg:ellipse cx="37.039" cy="17.585" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.066" ry="5.449" transform="rotate(-85.419 37.039 17.585)"></svg:ellipse><svg:ellipse cx="10.961" cy="17.585" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.449" ry="7.066" transform="rotate(-4.581 10.961 17.584)"></svg:ellipse>`,
})
export class ArcticonsFurAffinityNocIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
