import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLeftTriangleIcon],svg[hugeicons-left-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 20v2m9-14V6.485c0-2.708 0-4.061-.79-4.412c-.792-.351-1.733.584-3.617 2.456L4.716 15.337c-1.988 1.976-2.982 2.964-2.654 3.814C2.39 20 3.766 20 6.518 20H8m3 0h6.394c1.229 0 1.843 0 2.224-.396c.382-.397.382-1.035.382-2.31V13c0-.943 0-1.414.293-1.707S21.057 11 22 11"></svg:path><svg:path d="M20 15h-1c-1.886 0-2.828 0-3.414.586S15 17.114 15 19v1"></svg:path></svg:g>`,
})
export class HugeiconsLeftTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
