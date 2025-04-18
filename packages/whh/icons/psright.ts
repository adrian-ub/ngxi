import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPsrightIcon],svg[whh-psright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 354L347 74q22-23 71-48.5T497 0h377q62 0 106 43.5t44 105.5v598q0 61-44 105t-106 44H497q-30 0-82-25t-68-50L52 542Q0 502 0 448t52-94"></svg:path>`,
})
export class WhhPsrightIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
