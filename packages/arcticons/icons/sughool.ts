import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSughoolIcon],svg[arcticons-sughool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 30.5h-13v-13h-13v13h-13"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.298 26.298L24 24v-3.25m11.389-2.264a5.5 5.5 0 0 1 0 7.778m-22.778 0a5.5 5.5 0 0 1 0-7.778q0 0 0 0m2.061 6.717a4 4 0 0 1 0-5.657h0m18.656.001a4 4 0 0 1 0 5.657"></svg:path>`,
})
export class ArcticonsSughoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
