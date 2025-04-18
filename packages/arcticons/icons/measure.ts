import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeasureIcon],svg[arcticons-measure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.263 17.871v12.48L20.212 43.5L9.737 37.26L27.12 24.111L9.737 10.74L20.211 4.5zl-11.143 6.24l11.143 6.24"></svg:path>`,
})
export class ArcticonsMeasureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
