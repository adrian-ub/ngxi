import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNamurDiagnosticsPassiveIcon],svg[ix-namur-diagnostics-passive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 85.333v341.334h341.334V85.333zM64 64h384v384H64z" clip-rule="evenodd"></svg:path>`,
})
export class IxNamurDiagnosticsPassiveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
