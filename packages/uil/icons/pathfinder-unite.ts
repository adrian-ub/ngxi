import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilPathfinderUniteIcon],svg[uil-pathfinder-unite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7.54h-4.54V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12.46a1 1 0 0 0 1 1h4.54V21a1 1 0 0 0 1 1H21a1 1 0 0 0 1-1V8.54a1 1 0 0 0-1-1M20 20H9.54v-4.54a1 1 0 0 0-1-1H4V4h10.46v4.54a1 1 0 0 0 1 1H20Z"></svg:path>`,
})
export class UilPathfinderUniteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
