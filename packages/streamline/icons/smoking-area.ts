import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmokingAreaIcon],svg[streamline-smoking-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 12.5v-2a1 1 0 0 1 1-1h12v4h-12a1 1 0 0 1-1-1m10.5-3v4m1.923-13c2 2.5-2 3.5 0 6m-2.42-6c2 2.5-2 3.5 0 6"></svg:path>`,
})
export class StreamlineSmokingAreaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
