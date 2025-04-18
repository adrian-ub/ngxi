import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSpaceColonyIcon],svg[icon-park-outline-space-colony-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M42 43V6a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v18"></svg:path><svg:path d="M24 22c-9.941 0-18 8.059-18 18v4h36v-4c0-9.941-8.059-18-18-18Z"></svg:path><svg:path stroke-linecap="round" d="M8 31V8m8 16V14"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 14h11"></svg:path><svg:path d="M17 42v-3c0-9.389 3.134-17 7-17s7 7.611 7 17v3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44h40"></svg:path><svg:path d="M7 35s10.35-1 17-1s17 1 17 1"></svg:path></svg:g>`,
})
export class IconParkOutlineSpaceColonyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
