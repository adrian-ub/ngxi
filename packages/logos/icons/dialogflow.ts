import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosDialogflowIcon],svg[logos-dialogflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="logosDialogflow0" d="M244.828 64.429L139.051 3.389a22.13 22.13 0 0 0-22.188 0L11.067 64.428A22.26 22.26 0 0 0 0 83.666v122.171a22.19 22.19 0 0 0 11.067 19.184l52.925 30.592v62.372a6.658 6.658 0 0 0 9.987 5.74l170.957-98.65a22.13 22.13 0 0 0 11.068-19.184V83.648a22.31 22.31 0 0 0-11.176-19.219"></svg:path></svg:defs><svg:mask id="logosDialogflow1" fill="#fff"><svg:use href="#logosDialogflow0"></svg:use></svg:mask><svg:path fill="#EF6C00" d="m255.896 70.871l-127.912 73.872L0 70.871v147.743l63.992 36.909v73.889l191.904-110.798z" mask="url(#logosDialogflow1)"></svg:path><svg:path fill="#FF9800" d="M127.984 144.743L0 70.871L127.984-3l127.912 73.871z" mask="url(#logosDialogflow1)"></svg:path><svg:path fill="#FF9800" d="M125.716 142.493L.81 70.386l-.81.485l127.984 73.872l127.912-73.872l-3.006-1.781z" mask="url(#logosDialogflow1)"></svg:path><svg:path fill="#FF9800" d="M127.984 145.661v-.918L.81 71.303l-.81.486z" mask="url(#logosDialogflow1)"></svg:path>`,
})
export class LogosDialogflowIcon {
  readonly viewBox = input("0 0 256 326")
  readonly width = input("0.79em")
  readonly height = input("1em")
}
