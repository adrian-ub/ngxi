import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWallLampIcon],svg[hugeicons-wall-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.999 14.003V22m0-3.697l3.96 1.545c2.517.982 3.776 1.474 4.672.922c.897-.552.897-1.818.897-4.35V8.007m.023-5.008V2"></svg:path><svg:path d="M7.078 8.006h12.924M9.349 6.211c-.648.605-.776.7-.954.865a.95.95 0 0 0-.253.939l2.054 7.798a1.34 1.34 0 0 0 1.076.98a13.2 13.2 0 0 0 4.514-.001c.494-.087.893-.45 1.025-.932l2.156-7.872c.085-.311.025-.653-.2-.885c-.182-.19-.31-.259-.989-.892c-.752-.703-1.473-1.971-1.777-2.356s-.538-.574-.924-.661a6.9 6.9 0 0 0-3.027 0c-.386.087-.585.23-.924.66c-.34.432-1.025 1.654-1.777 2.357"></svg:path></svg:g>`,
})
export class HugeiconsWallLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
