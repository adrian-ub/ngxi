import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceEscalatorDownArrowIcon],svg[guidance-escalator-down-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m23.5 10.5l-10-10m10 10c-.398-.398-.654-1.133-.812-1.79a7.8 7.8 0 0 1-.149-2.687c.08-.697.235-1.464.544-1.773m.417 6.25c-.398-.398-1.133-.654-1.79-.812a7.8 7.8 0 0 0-2.687-.149c-.697.08-1.464.235-1.773.544M18.485 23.5H23.5v-6H18L9.757 9.257A6 6 0 0 0 5.515 7.5H.5v6H6l8.243 8.243a6 6 0 0 0 4.242 1.757Z"></svg:path>`,
})
export class GuidanceEscalatorDownArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
