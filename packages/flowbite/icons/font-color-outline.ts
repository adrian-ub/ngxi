import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteFontColorOutlineIcon],svg[flowbite-font-color-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m6.082 15.982l1.573-4m-1.573 4h-1.1m1.1 0h1.65m-.077-4l2.725-6.93a.11.11 0 0 1 .204 0l2.725 6.93m-5.654 0h-.006m.006 0h5.654m0 0l.617 1.569m5.11 4.453c0 1.102-.854 1.996-1.908 1.996s-1.908-.894-1.908-1.996c0-1.103 1.908-4.128 1.908-4.128s1.908 3.025 1.908 4.128Z"></svg:path>`,
})
export class FlowbiteFontColorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
