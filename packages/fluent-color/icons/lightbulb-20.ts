import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLightbulb20Icon],svg[fluent-color-lightbulb-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLightbulb200)" d="M12.688 16.606c-.185.77-.866 1.329-1.671 1.389l-.143.005H9.126c-.819 0-1.535-.516-1.777-1.261l-.037-.134l-.503-2.105h6.383z"></svg:path><svg:path fill="url(#fluentColorLightbulb202)" d="M12.688 16.606c-.185.77-.866 1.329-1.671 1.389l-.143.005H9.126c-.819 0-1.535-.516-1.777-1.261l-.037-.134l-.503-2.105h6.383z"></svg:path><svg:path fill="url(#fluentColorLightbulb201)" d="M6.81 14.5h6.382l.46-1.927a.2.2 0 0 1 .06-.1C15.226 11.075 16 9.51 16 7.801C16 4.597 13.314 2 10 2S4 4.596 4 7.8c0 1.709.775 3.274 2.29 4.672q.045.042.06.1z"></svg:path><svg:path fill="url(#fluentColorLightbulb203)" d="M6.929 15h6.143l.24-1H6.69z"></svg:path><svg:defs><svg:radialgradient id="fluentColorLightbulb200" cx="0" cy="0" r="1" gradientTransform="matrix(3.94518 13.74408 -20.92106 6.0053 6 3.571)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE06B"></svg:stop><svg:stop offset=".376" stop-color="#FFA43D"></svg:stop><svg:stop offset="1" stop-color="#E67505"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorLightbulb201" cx="0" cy="0" r="1" gradientTransform="matrix(3.94518 13.74408 -20.92106 6.0053 6 3.571)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE06B"></svg:stop><svg:stop offset=".376" stop-color="#FFA43D"></svg:stop><svg:stop offset="1" stop-color="#E67505"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorLightbulb202" x1="10" x2="10" y1="14.5" y2="18" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D34719"></svg:stop><svg:stop offset="1" stop-color="#D34719" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLightbulb203" x1="9.477" x2="10.231" y1="14.397" y2="16.396" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC7A3"></svg:stop><svg:stop offset="1" stop-color="#FF9C70"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorLightbulb20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
