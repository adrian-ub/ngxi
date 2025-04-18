import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWindowFrameLineDuotoneIcon],svg[solar-window-frame-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path fill="currentColor" d="M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" d="M2 8.75a.75.75 0 0 0 0 1.5zm20 1.5a.75.75 0 0 0 0-1.5zM8.25 21a.75.75 0 0 0 1.5 0zm1.5-11a.75.75 0 0 0-1.5 0zM2 10.25h20v-1.5H2zM9.75 21V10h-1.5v11z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWindowFrameLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
