import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityHeatMapSolidIcon],svg[clarity-heat-map-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 7v22a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2M8 26h20V10H8Zm2-7h4v5h-4Zm12 5v-5h4v5Zm-2-5v5h-4v-5Zm6-2h-4v-5h4Zm-6-5v5h-4v-5Zm-6 0v5h-4v-5Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityHeatMapSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
