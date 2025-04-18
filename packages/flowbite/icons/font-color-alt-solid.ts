import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteFontColorAltSolidIcon],svg[flowbite-font-color-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 18.066C20 19.686 18.657 21 17 21s-3-1.314-3-2.934S17 12 17 12s3 4.446 3 6.066"></svg:path><svg:path fill-rule="evenodd" d="m10.482 7.525l-1.36 3.457h2.719zm3.75 4.07l-2.717-6.909c-.37-.94-1.697-.94-2.066 0l-2.686 6.831a1 1 0 0 0-.08.202L5.4 14.982h-.418a1 1 0 1 0 0 2h2.75a1 1 0 1 0 0-2h-.183l.787-2h4.292l.367.935a1 1 0 1 0 1.861-.732l-.608-1.548z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlowbiteFontColorAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
