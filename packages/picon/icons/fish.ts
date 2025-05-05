import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFishIcon],svg[picon-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6c10-12 10 8 0-4m6 1v1l1-1"></svg:path>`,
})
export class PiconFishIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
