import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsJusticeScale01Icon],svg[hugeicons-justice-scale-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 5v17m0 0H9m3 0h3m6-9l-2.5-5l-2.5 5m-8 0L5.5 8L3 13"></svg:path><svg:path d="M4 8h1.048c1.264 0 2.49-.529 3.476-1.5c2.032-2 4.92-2 6.952 0c.986.971 2.212 1.5 3.476 1.5H20m-1.5 9c1.355 0 2.534-.834 3.147-2.065c.331-.665.496-.997.195-1.466C21.54 13 21.04 13 20.04 13h-3.082c-.999 0-1.499 0-1.8.469c-.302.469-.137.801.194 1.466C15.966 16.166 17.145 17 18.5 17m-13 0c1.355 0 2.534-.834 3.147-2.065c.331-.665.496-.997.195-1.466C8.54 13 8.04 13 7.04 13H3.959c-.999 0-1.499 0-1.8.469c-.302.469-.137.801.194 1.466C2.966 16.166 4.145 17 5.5 17"></svg:path><svg:path d="M13.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path></svg:g>`,
})
export class HugeiconsJusticeScale01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
