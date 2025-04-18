import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riForbid2FillIcon],svg[ri-forbid-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4.891-13.477a6 6 0 0 0-1.414-1.414l-8.368 8.368a6 6 0 0 0 1.414 1.414z"></svg:path>`,
})
export class RiForbid2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
