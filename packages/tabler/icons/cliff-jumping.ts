import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCliffJumpingIcon],svg[tabler-cliff-jumping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-3.5 11l2.5 2l2-2m3 3l3-3l-4-2l-1-5"></svg:path><svg:path d="m10.5 7.5l2 3l3.5.5l3-2l.5-3M4 21v-1l2-3l.5-2.5L8 12L7 7l1-3l-1-1l-2 .5L3 3"></svg:path></svg:g>`,
})
export class TablerCliffJumpingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
