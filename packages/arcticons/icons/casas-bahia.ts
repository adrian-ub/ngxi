import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCasasBahiaIcon],svg[arcticons-casas-bahia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.764 23.507c-.208-.03-.218-.31-.015-.361c3.308-.839 5.65-3.956 5.65-8.71c0-5.508-5.442-8.936-10.67-8.936H8.866v37h17.918c6.713 0 12.352-4.282 12.352-9.563c0-5.923-3.133-8.801-7.371-9.43m-22.9-8.296h28.512"></svg:path>`,
})
export class ArcticonsCasasBahiaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
