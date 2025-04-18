import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCandyOffIcon],svg[tabler-candy-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m11.174 7.17l.119-.12a2 2 0 0 1 2.828 0l2.829 2.83a2 2 0 0 1 0 2.828l-.124.124m-2 2l-2.123 2.123a2 2 0 0 1-2.828 0l-2.829-2.831a2 2 0 0 1 0-2.828l2.113-2.112m7.084-.012l3.086-.772a1.5 1.5 0 0 0 .697-2.516L17.81 3.667a1.5 1.5 0 0 0-2.44.47L14.122 7.05"></svg:path><svg:path d="M9.172 16.243L8.4 19.329a1.5 1.5 0 0 1-2.516.697L3.667 17.81a1.5 1.5 0 0 1 .47-2.44l2.913-1.248M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerCandyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
