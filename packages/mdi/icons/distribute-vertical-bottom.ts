import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDistributeVerticalBottomIcon],svg[mdi-distribute-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3h10v5h5v2H2V8h5zM2 19v2h20v-2h-3v-5H5v5z"></svg:path>`,
})
export class MdiDistributeVerticalBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
