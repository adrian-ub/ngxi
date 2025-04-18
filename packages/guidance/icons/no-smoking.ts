import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceNoSmokingIcon],svg[guidance-no-smoking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8.5 11.5h-8v5h13m-2-5h9v5h-4m7-5.5v6m-9-16v1A6.5 6.5 0 0 0 21 8.5m2.5.5V5.5H21A3.5 3.5 0 0 1 17.5 2V1M.5.5l23 23"></svg:path>`,
})
export class GuidanceNoSmokingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
