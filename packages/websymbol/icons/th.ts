import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolThIcon],svg[websymbol-th-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 0v160H560V0zm0 280v160H560V280zm0 280v160H560V560zM440 0v440H0V0zM120 320h200V120H120zm880 520v160H560V840zM440 560v440H0V560zM120 880h200V680H120z"></svg:path>`,
})
export class WebsymbolThIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}
