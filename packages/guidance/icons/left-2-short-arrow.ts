import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceLeft2ShortArrowIcon],svg[guidance-left-2-short-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 1.5c0 1.11 1.1 2.771 2.212 4.166c1.432 1.796 3.141 3.365 5.102 4.563c1.469.897 3.253 1.758 4.686 1.758M12 22.5c0-1.11 1.1-2.771 2.212-4.166c1.432-1.796 3.141-3.365 5.102-4.563c1.469-.897 3.253-1.758 4.686-1.758M24 12H0"></svg:path>`,
})
export class GuidanceLeft2ShortArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
