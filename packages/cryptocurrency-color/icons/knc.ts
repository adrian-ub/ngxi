import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorKncIcon],svg[cryptocurrency-color-knc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#31CB9E"></svg:circle><svg:g fill="#FFF"><svg:path d="m14.927 16.162l7.72 4.423a.408.408 0 0 0 .618-.353v-8.146a.405.405 0 0 0-.618-.35zm7.557-6.383l-5.278-3.882a.42.42 0 0 0-.661.222l-1.927 8.647l7.82-4.323a.39.39 0 0 0 .046-.664M17.2 26.424l5.284-3.882a.395.395 0 0 0-.044-.673l-7.822-4.323l1.927 8.647a.417.417 0 0 0 .655.238"></svg:path><svg:path d="m12.92 16.002l2.007-9.389a.398.398 0 0 0-.618-.404l-5.142 3.943a1.07 1.07 0 0 0-.417.85v10.006c-.005.337.15.656.417.861l5.117 3.932a.398.398 0 0 0 .618-.405l-1.983-9.394z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorKncIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
