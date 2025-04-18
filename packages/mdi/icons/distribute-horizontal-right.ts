import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDistributeHorizontalRightIcon],svg[mdi-distribute-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17V7h5V2h2v20H8v-5zm16 5h2V2h-2v3h-5v14h5z"></svg:path>`,
})
export class MdiDistributeHorizontalRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
