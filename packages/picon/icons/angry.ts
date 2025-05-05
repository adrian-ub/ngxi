import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAngryIcon],svg[picon-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 0Q4 2 1 0q3 4 6 0m1 1Q6 4 8 7Q4 4 8 1M7 8Q4 4 1 8q3-2 6 0M0 7q2-3 0-6q4 3 0 6"></svg:path>`,
})
export class PiconAngryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
