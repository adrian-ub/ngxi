import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiDoubeWindowClosedIcon],svg[cbi-doube-window-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.044 16.938h5.266V6.756h-5.266Zm.418-9.738h4.431v9.3h-4.431zm-5.613 9.738h5.107V6.756H6.849ZM7.266 7.2h4.273v9.3H7.266Zm-.972-1.032v11.326h11.412V6.168ZM17.4 17.026H6.76V6.667H17.4Z"></svg:path>`,
})
export class CbiDoubeWindowClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
