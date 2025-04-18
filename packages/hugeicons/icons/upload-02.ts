import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUpload02Icon],svg[hugeicons-upload-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 14l.234.663c.91 2.578 1.365 3.868 2.403 4.602s2.406.735 5.14.735h2.445c2.735 0 4.102 0 5.14-.735c1.039-.734 1.494-2.024 2.404-4.602L21 14M12 4v10m0-10c-.7 0-2.008 1.994-2.5 2.5M12 4c.7 0 2.008 1.994 2.5 2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsUpload02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
