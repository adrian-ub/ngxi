import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDistributeHorizontalCenterIcon],svg[mdi-distribute-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v3h2v14H8v3H6v-3H4V5h2V2zm8 0v5h-2v10h2v5h2v-5h2V7h-2V2z"></svg:path>`,
})
export class MdiDistributeHorizontalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
