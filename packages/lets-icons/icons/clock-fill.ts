import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsClockFillIcon],svg[lets-icons-clock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.965 3.136a4 4 0 0 0-2.829 2.829m14.899-2.829a4 4 0 0 1 2.829 2.829"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-12a1 1 0 1 0-2 0v3.75c0 .69.56 1.25 1.25 1.25H15a1 1 0 1 0 0-2h-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsClockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
