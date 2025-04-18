import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPinPreFilledIcon],svg[lsicon-pin-pre-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.702 2.269a.5.5 0 0 1 .528.115l3.536 3.535a.5.5 0 0 1-.319.853l-1.108.078l-3.925 5.046l.755.756l-.707.707l-2.475-2.475l-3.181 3.182l-.708-.707l3.182-3.182l-2.475-2.475l.708-.707l.74.741l5.045-3.923l.08-1.111a.5.5 0 0 1 .324-.433" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPinPreFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
