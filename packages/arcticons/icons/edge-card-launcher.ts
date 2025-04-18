import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEdgeCardLauncherIcon],svg[arcticons-edge-card-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="31.166" height="25.627" x="5.722" y="11.187" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.756" ry="1.756"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.067 36.813v3.931c0 .97.786 1.756 1.756 1.756h24.7c.97 0 1.755-.786 1.755-1.756V7.256c0-.97-.786-1.756-1.756-1.756h-24.7c-.969 0-1.755.786-1.755 1.756v3.93"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.454 11.187h-3.11c-.97 0-1.756.786-1.756 1.756v22.114c0 .97.786 1.756 1.756 1.756h3.11m5.85-25.626h-3.11c-.97 0-1.756.786-1.756 1.756v22.114c0 .97.787 1.756 1.756 1.756h3.11"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.66 18.129h-8.306a2.345 2.345 0 0 0-2.345 2.344v.61m10.651 8.862h-8.306a2.345 2.345 0 0 1-2.345-2.345v-1.218a2.345 2.345 0 0 1 2.345-2.345h8.306"></svg:path>`,
})
export class ArcticonsEdgeCardLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
