import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTableLamp1SolidIcon],svg[streamline-table-lamp-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.44.44A1.5 1.5 0 0 1 3.5 0h2a1.5 1.5 0 0 1 1.3.75H8a4.75 4.75 0 0 1 4.75 4.75v7h.5a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h4v-7A3.25 3.25 0 0 0 8 2.25H7v.472a4.5 4.5 0 0 1 2 3.782a.5.5 0 0 1-.5.496h-8a.5.5 0 0 1-.5-.496a4.5 4.5 0 0 1 2-3.782V1.5c0-.398.158-.78.44-1.06" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTableLamp1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
