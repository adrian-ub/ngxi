import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFiles01Icon],svg[hugeicons-files-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.499 19h-2c-2.828 0-4.243 0-5.121-.879c-.879-.878-.879-2.293-.879-5.121V8c0-2.828 0-4.243.879-5.121C8.256 2 9.67 2 12.499 2h1.343c.818 0 1.226 0 1.594.152c.367.152.657.442 1.235 1.02l2.657 2.656c.578.578.867.868 1.019 1.235s.152.776.152 1.594V13c0 2.828 0 4.243-.879 5.121c-.878.879-2.293.879-5.12.879"></svg:path><svg:path d="M14.999 2.5v1c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586h1M6.499 5a3 3 0 0 0-3 3v8c0 2.828 0 4.243.879 5.121C5.256 22 6.67 22 9.499 22h5a3 3 0 0 0 3-3M10 11h4m-4 4h7"></svg:path></svg:g>`,
})
export class HugeiconsFiles01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
