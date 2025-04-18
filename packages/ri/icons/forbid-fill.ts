import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riForbidFillIcon],svg[ri-forbid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M8.523 7.109A6 6 0 0 0 7.11 8.523l8.368 8.368a6 6 0 0 0 1.414-1.414z"></svg:path>`,
})
export class RiForbidFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
