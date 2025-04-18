import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDownload03Icon],svg[hugeicons-download-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.25 9c2.058.074 3.805 1.617 3.749 3.684c-.013.481-.2 1.076-.572 2.265c-.897 2.861-2.404 5.345-5.78 5.941c-.622.11-1.32.11-2.717.11h-1.86c-1.397 0-2.095 0-2.716-.11c-3.377-.596-4.884-3.08-5.78-5.941c-.373-1.19-.56-1.784-.573-2.265C1.945 10.617 3.692 9.074 5.75 9"></svg:path><svg:path d="M12 14V3m0 11c-.7 0-2.008-1.994-2.5-2.5M12 14c.7 0 2.008-1.994 2.5-2.5"></svg:path></svg:g>`,
})
export class HugeiconsDownload03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
