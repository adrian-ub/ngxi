import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGamepad1Icon],svg[tdesign-gamepad-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4a2 2 0 0 1 2-2h4v2h-4v2h9v14H2V6h9zM4 8v10h16V8zm5 2v2h2v2H9v2H7v-2H5v-2h2v-2zm6 0h2.003v2h2v2.004h-2v2H15v-2h-2V12h2zm.004 2.004V14H17v-1.996z"></svg:path>`,
})
export class TdesignGamepad1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
