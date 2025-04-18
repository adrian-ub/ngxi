import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCrossBoldIcon],svg[ph-cross-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 68h-36V32a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v36H56a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h36v84a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-84h36a20 20 0 0 0 20-20V88a20 20 0 0 0-20-20m-4 48h-44a12 12 0 0 0-12 12v92h-24v-92a12 12 0 0 0-12-12H60V92h44a12 12 0 0 0 12-12V36h24v44a12 12 0 0 0 12 12h44Z"></svg:path>`,
})
export class PhCrossBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
