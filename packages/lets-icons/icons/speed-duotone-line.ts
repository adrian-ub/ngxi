import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSpeedDuotoneLineIcon],svg[lets-icons-speed-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" d="M9.5 15a2.5 2.5 0 1 1 5 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 12.5l2-3"></svg:path><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M8.939 6.609A8 8 0 0 1 20 14v.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5V14a8 8 0 0 1 4.939-7.391M3 14a9 9 0 0 1 18 0v.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 14.5z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 15.5h-9"></svg:path></svg:g>`,
})
export class LetsIconsSpeedDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
