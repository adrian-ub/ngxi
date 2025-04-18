import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronLeftCircleIcon],svg[tdesign-chevron-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m13.914-4l-4 4l4 4l-1.414 1.414L8.086 12L13.5 6.586z"></svg:path>`,
})
export class TdesignChevronLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
