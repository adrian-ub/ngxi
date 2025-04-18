import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapCafeIcon],svg[map-cafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M37 7H9v27c0 2.2 1.8 4 4 4h20c2.2 0 4-1.8 4-4v-5c6.076 0 11-4.925 11-11S43.076 7 37 7m0 17V12a6 6 0 1 1 0 12M2 40v2.301C2 44.197 4.069 45 6.6 45h36.8c2.53 0 4.6-.803 4.6-2.699V40z"></svg:path>`,
})
export class MapCafeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
