import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBallBaseballIcon],svg[tabler-ball-baseball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.636 18.364A9 9 0 1 0 18.364 5.636A9 9 0 0 0 5.636 18.364"></svg:path><svg:path d="M12.495 3.02a9 9 0 0 1-9.475 9.475m17.96-.99a9 9 0 0 0-9.475 9.475M9 9l2 2m2 2l2 2m-4-8l2 1m-6 3l1 2m8-2l1 2m-6 3l2 1"></svg:path></svg:g>`,
})
export class TablerBallBaseballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
