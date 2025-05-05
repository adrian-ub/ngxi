import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDogIcon],svg[picon-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V2l1 1h4V0l1 1h2v2H7v5H6L5 5H2L1 8"></svg:path>`,
})
export class PiconDogIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
