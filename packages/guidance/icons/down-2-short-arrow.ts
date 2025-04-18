import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceDown2ShortArrowIcon],svg[guidance-down-2-short-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.5 12c1.11 0 2.771 1.1 4.166 2.212c1.796 1.432 3.365 3.141 4.563 5.102c.897 1.469 1.758 3.253 1.758 4.686M22.5 12c-1.11 0-2.771 1.1-4.166 2.212c-1.796 1.432-3.365 3.141-4.563 5.102c-.897 1.469-1.758 3.253-1.758 4.686M12 24V0"></svg:path>`,
})
export class GuidanceDown2ShortArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
