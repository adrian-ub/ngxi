import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDistributeVerticalTopIcon],svg[mdi-distribute-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21H7v-5H2v-2h20v2h-5zm5-16V3H2v2h3v5h14V5z"></svg:path>`,
})
export class MdiDistributeVerticalTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
