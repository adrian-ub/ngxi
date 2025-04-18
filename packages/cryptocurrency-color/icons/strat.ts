import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorStratIcon],svg[cryptocurrency-color-strat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#1387C9"></svg:circle><svg:path fill="#FFF" fill-rule="nonzero" d="m16.053 18.373l9.594-5.584l-9.594-5.684l-9.498 5.684zm-10.006-2.92a.76.76 0 0 0 .376.657l9.627 5.608l9.785-5.788a.74.74 0 0 1 1.109.64v2.626a.74.74 0 0 1-.361.637l-10.157 6.063a.73.73 0 0 1-.746.003L5.26 19.773a.53.53 0 0 1-.189-.721a.52.52 0 0 1 .716-.19l10.263 6.033l9.847-5.878v-1.9l-9.473 5.603a.73.73 0 0 1-.742.003l-9.783-5.7A1.82 1.82 0 0 1 5 15.453V12.98a.631.631 0 0 1 .947-.548l.608.357l-.764.457a.52.52 0 0 1-.784-.364a.53.53 0 0 1 .25-.542l10.419-6.236a.73.73 0 0 1 .75-.002l10.211 6.05a.744.744 0 0 1-.005 1.281L16.42 19.377a.73.73 0 0 1-.74-.001L5.42 13.343a.415.415 0 0 0 .608-.239a.4.4 0 0 0 .02-.124z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorStratIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
