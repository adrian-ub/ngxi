import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStepIntoRoundedIcon],svg[material-symbols-light-step-into-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.002 21.5q-1.04 0-1.771-.728t-.731-1.77t.729-1.771t1.769-.731t1.771.729t.731 1.769t-.728 1.771t-1.77.731m-.502-9.421V3.712q0-.213.144-.357t.357-.143t.356.143t.143.357v8.386l2.721-2.74q.136-.16.339-.16t.369.156q.165.169.165.36q0 .192-.165.357l-3.363 3.364q-.243.242-.566.242t-.565-.242l-3.389-3.389q-.134-.135-.14-.339q-.006-.203.14-.35q.14-.159.354-.15t.354.15z"></svg:path>`,
})
export class MaterialSymbolsLightStepIntoRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
