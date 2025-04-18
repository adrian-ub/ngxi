import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVirtualRealitySolidIcon],svg[streamline-virtual-reality-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.79 1.087A1.5 1.5 0 0 1 4.074.36h5.852a1.5 1.5 0 0 1 1.284.726l2.586 4.29H.211zM0 7a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v5a1.5 1.5 0 0 1-1.5 1.5H9.48a1.5 1.5 0 0 1-1.17-.563l-.92-1.149a.5.5 0 0 0-.78 0l-.92 1.149a1.5 1.5 0 0 1-1.17.563H1.5A1.5 1.5 0 0 1 0 12z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineVirtualRealitySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
