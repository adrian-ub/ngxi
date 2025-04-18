import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWritingSignOffIcon],svg[tabler-writing-sign-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19q5-3 5-6c0-3-1-3-2-3s-2.032 1.085-2 3c.034 2.048 1.658 2.877 2.5 4C8 19 9 19.5 10 18q1-1.5 1.5-2.5q1.5 3.5 4 3.5H18m-2-3v1l2 2l.5-.5M20 16V5c0-1.121-.879-2-2-2s-2 .879-2 2v7m0-5h4M3 3l18 18"></svg:path>`,
})
export class TablerWritingSignOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
