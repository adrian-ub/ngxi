import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSmartScreenIcon],svg[ic-sharp-smart-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5v14h22V5zm17 12H6V7h12z"></svg:path><svg:path fill="currentColor" d="M12.5 11.25H14v1.5h-1.5zm2.5 0h1.5v1.5H15zm-5 0h1.5v1.5H10zm-2.5 0H9v1.5H7.5z"></svg:path>`,
})
export class IcSharpSmartScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
