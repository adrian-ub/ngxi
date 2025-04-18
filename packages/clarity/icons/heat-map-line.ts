import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityHeatMapLineIcon],svg[clarity-heat-map-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M8 10h20v16H8Zm1.6 14h4.5v-5.2H9.6Zm4.5-12.4H9.6v5.6h4.5ZM26 24v-5.2h-4.1V24Zm0-12.4h-4.1v5.6H26Zm-10.3 0v5.6h4.6v-5.6Zm0 12.4h4.6v-5.2h-4.6Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityHeatMapLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
