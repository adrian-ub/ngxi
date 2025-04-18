import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteCaptionSolidIcon],svg[flowbite-caption-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm6.962 4.856a1.48 1.48 0 0 1 1.484.066A1 1 0 1 0 11.53 9.24a3.475 3.475 0 1 0-.187 5.955a1 1 0 1 0-.976-1.746a1.474 1.474 0 1 1-1.405-2.593m6.186 0a1.48 1.48 0 0 1 1.484.066a1 1 0 1 0 1.084-1.682a3.475 3.475 0 1 0-.187 5.955a1 1 0 1 0-.976-1.746a1.474 1.474 0 1 1-1.405-2.593" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteCaptionSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
