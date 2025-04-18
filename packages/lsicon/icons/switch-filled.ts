import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSwitchFilledIcon],svg[lsicon-switch-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.33 2.624l5 4.376H2V6h9.67l-3-2.624zM1.5 9H14v1H4.5l2.8 2.1l-.6.8z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSwitchFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
