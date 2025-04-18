import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirWhiteFlagSolidIcon],svg[iconoir-white-flag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20.94 4.654l-.89 9.8a.6.6 0 0 1-.598.546H5l.95-10.454A.6.6 0 0 1 6.548 4h13.795a.6.6 0 0 1 .598.654"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 15l.95-10.454A.6.6 0 0 1 6.548 4h13.795a.6.6 0 0 1 .598.654l-.891 9.8a.6.6 0 0 1-.598.546zm0 0l-.6 6"></svg:path></svg:g>`,
})
export class IconoirWhiteFlagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
