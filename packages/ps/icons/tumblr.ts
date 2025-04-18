import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psTumblrIcon],svg[ps-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 378q-12-7-17-20q-3-7-3-49V190h108v-82H172V2h-66q-5 37-16 58q-12 24-31 40q-14 12-53 25v65h63v162q0 33 7 48q6 17 24 32t42 22q21 8 50 8q32 0 52-5q28-7 54-20v-72q-34 22-70 22q-20 0-36-9"></svg:path>`,
})
export class PsTumblrIcon {
  readonly viewBox = input("0 0 304 488")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
