import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2InternetSharingIcon],svg[fluent-mdl2-internet-sharing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 640h128v1408H896zM372 244q-58 58-103 126t-77 144t-47 155t-17 163q0 82 16 162t48 156t76 143t104 127l-91 91q-136-137-208-311T0 832q0-193 72-367t209-312zm1267-91q136 137 208 311t73 368q0 193-72 367t-209 312l-91-91q58-58 103-126t77-144t47-155t17-163q0-82-16-162t-48-156t-76-143t-104-127zm-272 272q81 81 125 186t44 221q0 115-44 220t-125 187l-90-90q63-63 96-145t34-172q0-89-33-171t-97-146zm-724 90q-63 63-97 145t-34 172q0 89 34 171t97 146l-90 90q-81-81-125-186t-44-221q0-115 44-220t125-187z"></svg:path>`,
})
export class FluentMdl2InternetSharingIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
