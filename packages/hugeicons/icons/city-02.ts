import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCity02Icon],svg[hugeicons-city-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 22h20M14 4h-4c-1.655 0-2 .345-2 2v16h8V6c0-1.655-.345-2-2-2m-6 9H5c-1.655 0-2 .345-2 2v7h5zm11 0h-3v9h5v-7c0-1.655-.345-2-2-2m-7-9V2m0 20v-2m-1-5h2m-2-3.5h2M11 8h2" color="currentColor"></svg:path>`,
})
export class HugeiconsCity02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
