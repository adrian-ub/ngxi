import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsDownloadCircle1Icon],svg[lineicons-download-circle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.672 13.63l-1.373-1.372a.75.75 0 0 0-1.06 1.061l2.64 2.638a.75.75 0 0 0 1.11-.026l2.613-2.612a.75.75 0 0 0-1.06-1.06l-1.37 1.369V8.56a.75.75 0 0 0-1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.422 12c0-5.522 4.477-9.999 10-9.999S22.42 6.478 22.42 12s-4.477 10-10 10s-10-4.478-10-10m10-8.499a8.5 8.5 0 1 0 0 16.999a8.5 8.5 0 0 0 0-16.999" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsDownloadCircle1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
