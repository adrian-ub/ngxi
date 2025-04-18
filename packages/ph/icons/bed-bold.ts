import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBedBoldIcon],svg[ph-bed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 68H36V48a12 12 0 0 0-24 0v160a12 12 0 0 0 24 0v-28h196v28a12 12 0 0 0 24 0v-96a44.05 44.05 0 0 0-44-44m-112 88H36V92h64Zm132 0H124V92h88a20 20 0 0 1 20 20Z"></svg:path>`,
})
export class PhBedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
