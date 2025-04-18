import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding2Icon],svg[tdesign-building-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .834l6.372 3.823l-1.029 1.715L17 6.166V8h5v14H2V8h5V6.166l-.343.206l-1.029-1.715zM9 4.966V8h6V4.966l-3-1.8zm2 .032h2.004v2.004H11zM4 10v10h4v-7h8v7h4V10zm10 10v-5h-4v5z"></svg:path>`,
})
export class TdesignBuilding2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
