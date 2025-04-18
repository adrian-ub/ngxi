import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmartRemote2Icon],svg[arcticons-smart-remote-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.239 19.169a6.1 6.1 0 0 1 4.112-1.587c3.396 0 6.149 2.77 6.149 6.188s-2.753 6.187-6.15 6.187c-2.343 0-3.663-1.342-5.291-2.98l-10.12-10.245a10.12 10.12 0 0 0-7.224-3.011C9.073 13.72 4.5 18.323 4.5 24s4.573 10.28 10.215 10.28c3.982 0 7.152-2.282 9.37-5.537"></svg:path>`,
})
export class ArcticonsSmartRemote2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
