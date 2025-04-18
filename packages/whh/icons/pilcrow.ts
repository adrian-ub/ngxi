import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPilcrowIcon],svg[whh-pilcrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 128h-64v832q0 26-19 45t-45.5 19t-45-19t-18.5-45V128H512v832q0 26-19 45t-45.5 19t-45-19t-18.5-45V640h-64q-87 0-160.5-43T43 480.5T0 320t43-160.5T159.5 43T320 0h640q26 0 45 18.5t19 45t-18.5 45.5t-45.5 19"></svg:path>`,
})
export class WhhPilcrowIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
