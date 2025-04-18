import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDynamicIslandIcon],svg[arcticons-dynamic-island-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="41" height="17.872" x="3.5" y="15.629" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="8.936" ry="8.936"></svg:rect>`,
})
export class ArcticonsDynamicIslandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
