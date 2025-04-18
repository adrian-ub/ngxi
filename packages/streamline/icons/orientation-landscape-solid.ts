import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOrientationLandscapeSolidIcon],svg[streamline-orientation-landscape-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 11V3a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 14 3zm-3.031-6.033a1.467 1.467 0 1 1-2.934 0a1.467 1.467 0 0 1 2.934 0M1.958 6.714A6.6 6.6 0 0 1 8.452 11.5H1.5A.5.5 0 0 1 1 11V6.775q.47-.063.945-.061zM9.486 11.5H12.5a.5.5 0 0 0 .5-.5V9.309a7 7 0 0 0-1.944-.27h-.002a7.2 7.2 0 0 0-2.405.408c.376.636.66 1.327.837 2.053" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOrientationLandscapeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
