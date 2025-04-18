import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPentagonMinusIcon],svg[tabler-pentagon-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.5 21q-1.82 0-5.458.005a1.98 1.98 0 0 1-1.881-1.367l-3.064-9.43a1.98 1.98 0 0 1 .719-2.212l8.021-5.828a1.98 1.98 0 0 1 2.326 0l8.021 5.828c.694.504.984 1.397.719 2.212L20.344 15M16 19h6"></svg:path>`,
})
export class TablerPentagonMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
