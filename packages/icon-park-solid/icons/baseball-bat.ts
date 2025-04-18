import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBaseballBatIcon],svg[icon-park-solid-baseball-bat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke="currentColor" stroke-width="4"><svg:circle cx="40" cy="40" r="3"></svg:circle><svg:path stroke-linejoin="round" d="M16.502 9.43S26.5 22 37.5 37.501C21.5 26 9.43 16.502 9.43 16.502S3.111 10.89 7 7s9.502 2.43 9.502 2.43Z"></svg:path></svg:g>`,
})
export class IconParkSolidBaseballBatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
