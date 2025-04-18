import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSweechIcon],svg[arcticons-sweech-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.276 24l-5.846-5.848L42.5 6.077H11.323l-5.089 5.09v7.343l5.49 5.49m18.706-5.848l-6.146-6.148M11.724 24l5.846 5.848L5.5 41.923h31.177l5.088-5.09V29.49L36.277 24M17.57 29.848l6.146 6.148"></svg:path>`,
})
export class ArcticonsSweechIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
