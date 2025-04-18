import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFullscreenIcon],svg[el-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v413.818l144.141-145.386L475.708 600L143.555 932.153L0 789.844V1200h413.818l-145.386-144.141L600 724.292l332.153 332.153L789.844 1200H1200V786.182l-144.141 145.386L724.292 600l332.153-332.153L1200 410.156V0H786.182l145.386 144.141L600 475.708L267.847 143.555L410.156 0z"></svg:path>`,
})
export class ElFullscreenIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
