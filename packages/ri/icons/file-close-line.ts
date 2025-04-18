import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileCloseLineIcon],svg[ri-file-close-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22v-2H5V4h10v4h4v5h2V7l-5-5H3.999A.995.995 0 0 0 3 2.992v18.016a1 1 0 0 0 .993.992zm9.536-.879L19.414 19l2.122-2.121l-1.415-1.415l-2.12 2.122l-2.122-2.122l-1.414 1.415l2.12 2.12l-2.12 2.122l1.414 1.414L18 20.415l2.121 2.12z"></svg:path>`,
})
export class RiFileCloseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
