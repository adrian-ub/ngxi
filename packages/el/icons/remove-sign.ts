import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elRemoveSignIcon],svg[el-remove-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M411.475 262.5L600 451.025L788.525 262.5L937.5 411.475L748.975 600L937.5 788.525L788.525 937.5L600 748.975L411.475 937.5L262.5 788.525L451.025 600L262.5 411.475z"></svg:path>`,
})
export class ElRemoveSignIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
