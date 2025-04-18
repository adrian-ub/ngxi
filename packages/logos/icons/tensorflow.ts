import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosTensorflowIcon],svg[logos-tensorflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E55B2D" d="M145.726 42.065v42.07l72.861 42.07v-42.07zM0 84.135v42.07l36.43 21.03V105.17zm109.291 21.035l-36.43 21.034v126.2l36.43 21.035v-84.135l36.435 21.035v-42.07l-36.435-21.034z"></svg:path><svg:path fill="#ED8E24" d="M145.726 42.065L36.43 105.17v42.065l72.861-42.065v42.065l36.435-21.03zM255.022 63.1l-36.435 21.035v42.07l36.435-21.035zm-72.865 84.135l-36.43 21.035v42.07l36.43-21.036zm-36.43 63.104l-36.436-21.035v84.135l36.435-21.035z"></svg:path><svg:path fill="#F8BF3C" d="M145.726 0L0 84.135l36.43 21.035l109.296-63.105l72.861 42.07L255.022 63.1zm0 126.204l-36.435 21.03l36.435 21.036l36.43-21.035z"></svg:path>`,
})
export class LogosTensorflowIcon {
  readonly viewBox = input("0 0 256 274")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
