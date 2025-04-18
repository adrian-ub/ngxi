import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phJarLabelDuotoneIcon],svg[ph-jar-label-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104v80H48v-80Z" opacity=".2"></svg:path><svg:path d="M184 48.81V32a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v16.81A40.05 40.05 0 0 0 40 88v112a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40V88a40.05 40.05 0 0 0-32-39.19M56 112h144v64H56Zm112-64h-16V32h16Zm-48 0V32h16v16Zm-16-16v16H88V32ZM80 64h96a24 24 0 0 1 24 24v8H56v-8a24 24 0 0 1 24-24m96 160H80a24 24 0 0 1-24-24v-8h144v8a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhJarLabelDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
