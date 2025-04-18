import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBriefcaseIcon],svg[fa-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 256h512V128H640zm1152 640v480q0 66-47 113t-113 47H160q-66 0-113-47T0 1376V896h672v160q0 26 19 45t45 19h320q26 0 45-19t19-45V896zm-768 0v128H768V896zm768-480v384H0V416q0-66 47-113t113-47h352V96q0-40 28-68t68-28h576q40 0 68 28t28 68v160h352q66 0 113 47t47 113"></svg:path>`,
})
export class FaBriefcaseIcon {
  readonly viewBox = input("0 0 1792 1536")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
