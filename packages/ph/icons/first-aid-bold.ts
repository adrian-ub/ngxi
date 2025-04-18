import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFirstAidBoldIcon],svg[ph-first-aid-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 84h-44V40a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v44H40a20 20 0 0 0-20 20v48a20 20 0 0 0 20 20h44v44a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20v-44h44a20 20 0 0 0 20-20v-48a20 20 0 0 0-20-20m-4 64h-52a12 12 0 0 0-12 12v52h-40v-52a12 12 0 0 0-12-12H44v-40h52a12 12 0 0 0 12-12V44h40v52a12 12 0 0 0 12 12h52Z"></svg:path>`,
})
export class PhFirstAidBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
