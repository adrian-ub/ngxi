import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDistributeHorizontalLeftIcon],svg[mdi-distribute-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7v10h-5v5h-2V2h2v5zM5 2H3v20h2v-3h5V5H5z"></svg:path>`,
})
export class MdiDistributeHorizontalLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
