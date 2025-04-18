import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloud2Icon],svg[lineicons-cloud-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.387 9.984a5.615 5.615 0 0 1 10.918-1.715a5.658 5.658 0 0 1-.961 11.231H6.766a4.766 4.766 0 0 1-.38-9.516M12 6a4.115 4.115 0 0 0-4.116 4.115v.604a.75.75 0 0 1-.75.75h-.37a3.266 3.266 0 1 0 0 6.531h9.579a4.156 4.156 0 0 0 .324-8.3a.75.75 0 0 1-.67-.57A4.12 4.12 0 0 0 12 6" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCloud2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
