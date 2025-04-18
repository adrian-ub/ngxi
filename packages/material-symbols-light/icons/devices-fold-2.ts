import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesFold2Icon],svg[material-symbols-light-devices-fold-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.596 20H7.635q-.672 0-1.144-.472t-.472-1.144V5.616q0-.672.472-1.144Q6.964 4 7.635 4h9.58q.51 0 .904.28t.581.74l2.112 5.269q.322.788-.159 1.5q-.482.711-1.345.711H18.21v5.885q0 .67-.472 1.143q-.472.472-1.143.472m0-1q.27 0 .443-.173t.173-.442V12.5h-7.196q-.51 0-.904-.28t-.581-.74L7.019 7.722v10.664q0 .269.173.442q.174.173.443.173z"></svg:path>`,
})
export class MaterialSymbolsLightDevicesFold2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
