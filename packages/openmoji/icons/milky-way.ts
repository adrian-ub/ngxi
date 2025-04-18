import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMilkyWayIcon],svg[openmoji-milky-way-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiMilkyWay0" d="m53.75 17.19l.927.663l-.344-1.086l.917-.677l-1.14-.099l-.36-.991l-.36 1.081l-1.14.009l.917.677l-.344 1.086z"></svg:path><svg:path id="openmojiMilkyWay1" d="m55 27.271l.618.442l-.229-.724l.611-.451l-.76-.006l-.24-.721l-.24.721l-.76.006l.611.361l-.229.814z"></svg:path><svg:path id="openmojiMilkyWay2" d="m47 24.838l1.236.973l-.459-1.448L49 23.46l-1.519-.011L47 22.007l-.481 1.442L45 23.46l1.223.903l-.459 1.448z"></svg:path><svg:path id="openmojiMilkyWay3" d="m43.103 44.882l1.3.929l-.483-1.523l1.286-.949l-1.598-.012l-.505-1.516l-.505 1.426l-1.598.102l1.285.949l-.482 1.523z"></svg:path><svg:path id="openmojiMilkyWay4" d="m52.25 34.214l1.236.884l-.459-1.449l1.223-.902l-1.519-.102l-.481-1.351l-.481 1.441l-1.519.012l1.223.902l-.459 1.449zM42 36.192l1.854 1.325l-.688-2.173L45 33.991l-2.279-.107L42 31.811l-.721 2.163l-2.279.017l1.834 1.353l-.688 2.173zm-6.25 13.314l1.7 1.305l-.631-1.992l1.681-1.241l-2.089-.015l-.661-1.983l-.661 1.983l-2.089.015l1.681 1.241l-.631 1.992z"></svg:path><svg:path id="openmojiMilkyWay5" d="m35 41.369l.618.442l-.229-.724l.611-.451l-.76-.006l-.24-.721l-.24.721l-.76.006l.611.451l-.229.634zm13-3.098l.618.442l-.229-.724l.611-.451l-.76-.096l-.24-.631l-.24.721l-.76.006l.611.451l-.229.724zM29 52.369l.618.442l-.229-.724l.611-.451l-.76-.006l-.24-.721l-.24.721l-.76.006l.611.451l-.229.634z"></svg:path><svg:path id="openmojiMilkyWay6" d="m16.5 57.001l.927.663l-.344-1.086l.917-.767l-1.14.081l-.36-1.081l-.36 1.081l-1.14.009l.917.677l-.344 1.086zm11-9l.927.663l-.344-1.086l.917-.677l-1.14-.098l-.36-.992l-.36 1.081l-1.14.009l.917.677l-.344 1.086z"></svg:path><svg:path id="openmojiMilkyWay7" d="m22.103 53.882l1.3.929l-.483-1.523l1.286-.949l-1.598-.012l-.505-1.516l-.505 1.516l-1.598.012l1.285.859l-.482 1.613z"></svg:path></svg:defs><svg:g stroke="#000" stroke-linejoin="round"><svg:use href="#openmojiMilkyWay0"></svg:use><svg:use href="#openmojiMilkyWay1" stroke-width=".75"></svg:use><svg:use href="#openmojiMilkyWay2" stroke-width="2"></svg:use><svg:use href="#openmojiMilkyWay3" stroke-width="1.5"></svg:use><svg:use href="#openmojiMilkyWay4" stroke-width="2"></svg:use><svg:use href="#openmojiMilkyWay5" stroke-width=".75"></svg:use><svg:use href="#openmojiMilkyWay6"></svg:use><svg:use href="#openmojiMilkyWay7" stroke-width="1.5"></svg:use></svg:g><svg:rect width="48" height="48" x="12" y="12" fill="#1e50a0" rx="1"></svg:rect><svg:g fill="#f1b31c" stroke="#f1b31c" stroke-linejoin="round"><svg:use href="#openmojiMilkyWay0"></svg:use><svg:use href="#openmojiMilkyWay1" stroke-width=".75"></svg:use><svg:use href="#openmojiMilkyWay2" stroke-width="2"></svg:use><svg:use href="#openmojiMilkyWay3" stroke-width="1.5"></svg:use><svg:use href="#openmojiMilkyWay4" stroke-width="2"></svg:use><svg:use href="#openmojiMilkyWay5" stroke-width=".75"></svg:use><svg:use href="#openmojiMilkyWay6"></svg:use><svg:use href="#openmojiMilkyWay7" stroke-width="1.5"></svg:use></svg:g><svg:rect width="48" height="48" x="12" y="12" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" rx="1"></svg:rect>`,
})
export class OpenmojiMilkyWayIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
