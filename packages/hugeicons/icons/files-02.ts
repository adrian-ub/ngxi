import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFiles02Icon],svg[hugeicons-files-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.5 5h-2c-2.828 0-4.243 0-5.121.879C6.5 6.757 6.5 8.172 6.5 11v5c0 2.828 0 4.243.879 5.121C8.257 22 9.672 22 12.5 22h1.343c.818 0 1.226 0 1.594-.152s.656-.441 1.235-1.02l2.656-2.656c.579-.579.867-.867 1.02-1.235c.152-.368.152-.776.152-1.594V11c0-2.828 0-4.243-.879-5.121C18.743 5 17.328 5 14.5 5"></svg:path><svg:path d="M15 21.5v-1c0-1.886 0-2.828.586-3.414S17.114 16.5 19 16.5h1M6.5 19a3 3 0 0 1-3-3V8c0-2.828 0-4.243.879-5.121C5.257 2 6.672 2 9.5 2h5a3 3 0 0 1 3 3m-7.499 8h4m-4-4h7"></svg:path></svg:g>`,
})
export class HugeiconsFiles02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
