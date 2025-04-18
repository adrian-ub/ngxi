import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBowlingIcon],svg[tabler-bowling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11v.01M11 10v.01M10 14v.01m1.059-7.94a8 8 0 1 0 .32 15.81M15.969 9h4m-5-4c0 1.5 1 2 1 4c0 2.5-2 4.5-2 7c0 2.6 1.9 6 1.9 6h4.1s2-3.4 2-6c0-2.5-2-4.5-2-7c0-2 1-2.5 1-4a3 3 0 1 0-6 0"></svg:path>`,
})
export class TablerBowlingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
