import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteBeerMugEmptyOutlineIcon],svg[flowbite-beer-mug-empty-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.125 6H20v3.86a4 4 0 0 1-1.781 3.328l-1.58 1.046M4.189 17h12.625M9 7v7m3-7v7M4.941 4.938l-.875 14A1 1 0 0 0 5.064 20h10.872a1 1 0 0 0 .998-1.062l-.875-14A1 1 0 0 0 15.06 4H5.939a1 1 0 0 0-.998.938"></svg:path>`,
})
export class FlowbiteBeerMugEmptyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
