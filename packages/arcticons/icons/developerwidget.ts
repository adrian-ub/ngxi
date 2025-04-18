import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeveloperwidgetIcon],svg[arcticons-developerwidget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 34.972V40.9a2.61 2.61 0 0 0 2.6 2.6h20.8a2.61 2.61 0 0 0 2.6-2.6V7.1a2.61 2.61 0 0 0-2.6-2.6H13.6A2.61 2.61 0 0 0 11 7.1v5.928"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.926 31.947L20.873 24l-7.947-7.947m7.947 15.894h8.857"></svg:path>`,
})
export class ArcticonsDeveloperwidgetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
