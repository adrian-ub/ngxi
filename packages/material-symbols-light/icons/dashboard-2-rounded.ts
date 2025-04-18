import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDashboard2RoundedIcon],svg[material-symbols-light-dashboard-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.008 19q-.356 0-.586-.232q-.23-.233-.23-.576v-4.184q0-.356.232-.586q.233-.23.576-.23h4.185q.356 0 .585.233T21 14v4.185q0 .356-.232.585t-.576.23zM12 10.808q-.343 0-.575-.232T11.192 10V5.815q0-.355.233-.585T12 5h8.192q.344 0 .576.232t.232.576v4.185q0 .355-.232.585q-.233.23-.576.23zM3.808 19q-.343 0-.576-.232T3 18.192v-4.184q0-.356.232-.586t.576-.23H12q.343 0 .576.232t.232.576v4.185q0 .356-.232.585T12 19zm.007-8.192q-.355 0-.585-.232T3 10V5.815q0-.355.232-.585T3.808 5h4.185q.355 0 .585.232t.23.576v4.185q0 .355-.232.585q-.233.23-.576.23z"></svg:path>`,
})
export class MaterialSymbolsLightDashboard2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
