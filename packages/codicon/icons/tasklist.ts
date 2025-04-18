import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconTasklistIcon],svg[codicon-tasklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.57 6.699l5.693-4.936L8.585 1L3.273 5.596l-1.51-1.832L1 4.442l1.85 2.214zM15 5H6.824l2.307-2H15zM6 7h9v2H6zm9 4H6v2h9z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconTasklistIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
