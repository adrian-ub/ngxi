import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAlignleftIcon],svg[whh-alignleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.865 320h-896q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h896q26 0 45 19t19 45.5t-19 45t-45 18.5m-192-192h-704q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h704q26 0 45 19t19 45.5t-18.5 45t-45.5 18.5m-704 256h768q26 0 45 19t19 45.5t-19 45t-45 18.5h-768q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19m0 192h832q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5h-832q-27 0-45.5-18.5T.865 640t18.5-45.5t45.5-18.5m0 192h384q26 0 45 19t19 45.5t-19 45t-45 18.5h-384q-27 0-45.5-18.5T.865 832t18.5-45.5t45.5-18.5"></svg:path>`,
})
export class WhhAlignleftIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
