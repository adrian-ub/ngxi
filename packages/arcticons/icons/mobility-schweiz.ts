import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobilitySchweizIcon],svg[arcticons-mobility-schweiz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.764 21.362a8.12 8.12 0 0 1 8.118-8.119h0A8.12 8.12 0 0 1 24 21.362v13.395M7.764 13.243v21.514M24 21.362a8.12 8.12 0 0 1 8.118-8.119h0a8.12 8.12 0 0 1 8.118 8.119v13.395m-35.736 0h6.527M4.5 13.451l3.264-.208m12.972 21.514h6.528m9.709 0H43.5"></svg:path>`,
})
export class ArcticonsMobilitySchweizIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
