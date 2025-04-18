import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSunnyOutlineIcon],svg[lsicon-sunny-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 1v2m0 10v2m5-7h2M1 8h2m8.5 3.5L13 13M4.5 4.5L3 3m8.5 1.5L13 3m-8.5 8.5L3 13m8-5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path>`,
})
export class LsiconSunnyOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
