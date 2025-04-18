import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLayoutWindow2SolidIcon],svg[streamline-layout-window-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v1.375h14V1.5A1.5 1.5 0 0 0 12.5 0zM0 4.125h3.875V14H1.5A1.5 1.5 0 0 1 0 12.5zm5.125 5V14H12.5a1.5 1.5 0 0 0 1.5-1.5V9.125zM14 7.875H5.125v-3.75H14z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineLayoutWindow2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
