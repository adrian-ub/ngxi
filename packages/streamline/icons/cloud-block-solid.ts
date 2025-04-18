import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudBlockSolidIcon],svg[streamline-cloud-block-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.041.748a4.368 4.368 0 0 1 6.645 3.115a3.23 3.23 0 0 1 .208 6.118a4.906 4.906 0 0 0-9.776-.145a3.692 3.692 0 0 1 1.183-7.004A4.37 4.37 0 0 1 5.04.748ZM7 8.198a2.127 2.127 0 0 1 1.938 3.004L6.123 8.386A2.1 2.1 0 0 1 7 8.198m-2.517-.485a1 1 0 0 0-.095.095a3.627 3.627 0 1 0 .095-.095m3.395 4.55a2.127 2.127 0 0 1-2.816-2.816z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCloudBlockSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
