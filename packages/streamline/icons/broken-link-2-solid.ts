import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBrokenLink2SolidIcon],svg[streamline-broken-link-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.627 2.735a2.51 2.51 0 0 1 3.549 3.549L9.258 8.2L8.19 7.134l.96-.96a1 1 0 1 0-1.414-1.415l-.96.961l-1.068-1.067l1.918-1.918Zm-3.332.504L6.213 1.32a4.51 4.51 0 1 1 6.377 6.377l-1.918 1.918l3.014 3.014a.744.744 0 0 1-1.053 1.052L.225 1.274A.744.744 0 0 1 1.278.221L4.295 3.24Zm-1.56 2.974a1 1 0 0 1 0 1.414a2.51 2.51 0 0 0 3.549 3.549a1 1 0 0 1 1.414 1.414A4.51 4.51 0 1 1 1.32 6.213a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrokenLink2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
