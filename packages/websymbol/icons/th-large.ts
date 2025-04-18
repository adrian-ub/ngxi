import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolThLargeIcon],svg[websymbol-th-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 0v440H560V0zM680 320h200V120H680zM440 0v440H0V0zM120 320h200V120H120zm880 240v440H560V560zM680 880h200V680H680zM440 560v440H0V560zM120 880h200V680H120z"></svg:path>`,
})
export class WebsymbolThLargeIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}
