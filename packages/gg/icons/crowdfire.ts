import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCrowdfireIcon],svg[gg-crowdfire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2v2h8v8h2c0 5.523-4.477 10-10 10S2 17.523 2 12m16 0h-2V8h-4V6a6 6 0 1 0 6 6" clip-rule="evenodd"></svg:path>`,
})
export class GgCrowdfireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
