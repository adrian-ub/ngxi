import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowRightCircleIcon],svg[majesticons-arrow-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.707-12.707a1 1 0 0 1 1.414 1.415L11.414 11H15a1 1 0 1 1 0 2h-3.585l1.292 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.415l3-3z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsArrowRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
