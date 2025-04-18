import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiImacOutlinedIcon],svg[weui-imac-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="weuiImacOutlined0" fill="currentColor" d="M18.8 11V1.2H1.2V11zm0 1.2H1.2v1.6h17.6zM13.155 15l.622 1.84a.5.5 0 0 1-.474.66H6.697a.5.5 0 0 1-.474-.66L6.845 15H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1zm-5.044 0l-.439 1.3h4.656l-.44-1.3z"></svg:path></svg:defs><svg:use fill-rule="evenodd" href="#weuiImacOutlined0" transform="translate(2 4)"></svg:use>`,
})
export class WeuiImacOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
