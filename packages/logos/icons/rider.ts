import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosRiderIcon],svg[logos-rider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosRider0" x1="90.832%" x2="-19.123%" y1="81.803%" y2="19.04%"><svg:stop offset="0%" stop-color="#DD1265"></svg:stop><svg:stop offset="48%" stop-color="#DD1265"></svg:stop><svg:stop offset="94%" stop-color="#FDB60D"></svg:stop></svg:lineargradient><svg:lineargradient id="logosRider1" x1="35.983%" x2="53.7%" y1="7.271%" y2="92.994%"><svg:stop offset="14%" stop-color="#087CFA"></svg:stop><svg:stop offset="48%" stop-color="#DD1265"></svg:stop><svg:stop offset="96%" stop-color="#087CFA"></svg:stop></svg:lineargradient><svg:lineargradient id="logosRider2" x1="39.545%" x2="56.938%" y1="11.352%" y2="91.694%"><svg:stop offset="28%" stop-color="#DD1265"></svg:stop><svg:stop offset="97%" stop-color="#FDB60D"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosRider0)" d="M256 99.6L76.533 0l120.16 178.533l24.694-16.186z"></svg:path><svg:path fill="url(#logosRider1)" d="m184.4 58.987l-22.48-54.96l-49.733 48.96l20.346 177.653L180.72 256L256 212.027z"></svg:path><svg:path fill="url(#logosRider2)" d="M76.533 0L0 51.547L28.453 227.36l73.387 28.213l94.853-77.04z"></svg:path><svg:path d="M48 48.32h160v160H48z"></svg:path><svg:path fill="#FFF" d="M67.947 178.08h60v10h-60zM68 68.107h27.467a24 24 0 0 1 17.52 6.106a18.88 18.88 0 0 1 5.188 12.957l-.015.963a18.67 18.67 0 0 1-12.907 18.667l14.72 21.493H104.48L91.6 109.04H81.333v19.253H68zM94.667 97.44c6.238 0 9.91-3.214 10.147-8.005l.013-.662c0-5.68-3.947-8.613-10.4-8.613H81.333v17.28zm34.48-29.333h23.466c18.616 0 31.596 12.59 31.991 29.141l.01.965c0 16.934-13.067 30.08-32 30.08h-23.467zm13.333 11.946v36.267h10.24a17.147 17.147 0 0 0 18.155-17.206l-.022-.927a17.307 17.307 0 0 0-18.133-18.16z"></svg:path>`,
})
export class LogosRiderIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
