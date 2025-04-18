import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFilter2Icon],svg[streamline-filter-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5.5H.5l5 7v6l3-2v-4z"></svg:path>`,
})
export class StreamlineFilter2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
