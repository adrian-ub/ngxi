import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMivoIcon],svg[arcticons-mivo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 19.954l.319 10.062l8.944-18.261v23.372l9.157-29.6l-.266 36.946l9.689-29.227l-.426 23.584L42.5 19.315v7.72"></svg:path>`,
})
export class ArcticonsMivoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
