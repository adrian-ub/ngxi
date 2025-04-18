import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAlignrightIcon],svg[whh-alignright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 704H128q-27 0-45.5-18.5t-18.5-45T82.5 595t45.5-19h832q26 0 45 19t19 45.5t-19 45t-45 18.5m0-192H192q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h768q26 0 45 19t19 45.5t-19 45t-45 18.5m0-192H64q-27 0-45.5-18.5T0 256.5T18.5 211T64 192h896q26 0 45 19t19 45.5t-19 45t-45 18.5m0-192H256q-27 0-45.5-18.5t-18.5-45T210.5 19T256 0h704q26 0 45 19t19 45.5t-19 45t-45 18.5M576 768h384q26 0 45 19t19 45.5t-19 45t-45 18.5H576q-27 0-45.5-18.5T512 832t18.5-45.5T576 768"></svg:path>`,
})
export class WhhAlignrightIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
