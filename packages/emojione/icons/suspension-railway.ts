import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneSuspensionRailwayIcon],svg[emojione-suspension-railway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#94989b" d="M2 9.5h60v1.9H2zM2 17h60v1.9H2z"></svg:path><svg:g fill="#63686b"><svg:path d="M2 11.4h60V17H2z"></svg:path><svg:circle cx="54.5" cy="5.8" r="3.8"></svg:circle></svg:g><svg:circle cx="54.5" cy="5.8" r="2.3" fill="#3e4347"></svg:circle><svg:circle cx="26.4" cy="5.8" r="3.8" fill="#63686b"></svg:circle><svg:circle cx="26.4" cy="5.8" r="2.3" fill="#3e4347"></svg:circle><svg:circle cx="35.8" cy="5.8" r="3.8" fill="#63686b"></svg:circle><svg:g fill="#3e4347"><svg:circle cx="35.8" cy="5.8" r="2.3"></svg:circle><svg:path d="M28.2 2h5.6v16.9h-5.6z"></svg:path></svg:g><svg:path fill="#63686b" d="M29.2 2H33v16.9h-3.8z"></svg:path><svg:path fill="#3e4347" d="M56.4 2H62v16.9h-5.6z"></svg:path><svg:path fill="#63686b" d="M57.3 2h3.8v16.9h-3.8zM43.2 27.3h15v24.4h-15z"></svg:path><svg:path fill="#3e4347" d="M45.1 29.2h11.2v20.6H45.1z"></svg:path><svg:path fill="#63686b" d="M24.5 27.3h15v24.4h-15z"></svg:path><svg:path fill="#3e4347" d="M26.4 29.2h11.2v20.6H26.4z"></svg:path><svg:path fill="#63686b" d="M20.8 27.3h-7.6L5.8 51.7h15z"></svg:path><svg:path fill="#3e4347" d="M18.9 29.2v20.6H7.6l7.5-20.6z"></svg:path><svg:path fill="#ed4c5c" d="M16.1 23.6c-5.6 0-6.6 3.8-6.6 3.8L2 51.7C2 59.2 2 62 16.8 62H62V23.5c0 .1-34 .1-45.9.1m23.4 3.7v24.4h-15V27.3zM5.8 51.7l7.5-24.4h7.5v24.4zm52.4 0h-15V27.3h15zM24.5 18.9H62v3.8H24.5z"></svg:path><svg:path fill="#63686b" d="M28.2 22.6H62v.9H28.2z"></svg:path><svg:path fill="#fff" d="M2.9 53.1h2.8v2.8H2.9z"></svg:path><svg:path fill="#ffce31" d="M5.8 53.1h5.6v2.8H5.8z"></svg:path><svg:path fill="#94989b" d="M25.4 4.8h11.2v1.9H25.4zm28.2 0H62v1.9h-8.4z"></svg:path>`,
})
export class EmojioneSuspensionRailwayIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
