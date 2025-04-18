import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageFemaleIcon],svg[mage-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14.313A5.781 5.781 0 1 0 12 2.75a5.781 5.781 0 0 0 0 11.563m0 0v6.937m-3.469-3.469h6.938"></svg:path>`,
})
export class MageFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
