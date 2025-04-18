import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMvgoIcon],svg[arcticons-mvgo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="34.25" cy="24" r="10.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24c0 5.66-4.59 10.25-10.25 10.25S3.5 29.66 3.5 24s4.59-10.25 10.25-10.25a10.25 10.25 0 0 1 9.055 5.442M13.75 24H24"></svg:path>`,
})
export class ArcticonsMvgoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
