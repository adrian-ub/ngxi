import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsWindowsMinimize16Icon],svg[qlementine-icons-windows-minimize-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 8a.496.496 0 0 1-.351-.848A.48.48 0 0 1 3.5 7h9q.103 0 .19.039a.5.5 0 0 1 .161.112a.5.5 0 0 1 .146.35a.5.5 0 0 1-.146.352A.5.5 0 0 1 12.5 8z"></svg:path>`,
})
export class QlementineIconsWindowsMinimize16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
