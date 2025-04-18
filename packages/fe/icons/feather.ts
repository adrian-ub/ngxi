import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feFeatherIcon],svg[fe-feather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.993 17.877Q6 17.937 6 18v3a1 1 0 0 1-2 0v-3C4 9.163 11.163 2 20 2c0 8.162-6.111 14.896-14.007 15.877m.174-2.044A14.01 14.01 0 0 0 17.833 4.167A14.01 14.01 0 0 0 6.167 15.833"></svg:path>`,
})
export class FeFeatherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
