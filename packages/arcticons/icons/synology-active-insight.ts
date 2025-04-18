import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSynologyActiveInsightIcon],svg[arcticons-synology-active-insight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M38.83 41.515a4.67 4.67 0 0 1-4.05-2.338l-14.827-25.68a4.673 4.673 0 0 1 8.093-4.674l14.827 25.68a4.675 4.675 0 0 1-4.042 7.011Zm-17.167-.001H9.173a4.673 4.673 0 0 1 0-9.347h12.49a4.673 4.673 0 0 1 0 9.346Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M9.17 41.515a4.675 4.675 0 0 1-4.043-7.011l14.827-25.68a4.673 4.673 0 1 1 8.093 4.673l-14.826 25.68a4.67 4.67 0 0 1-4.052 2.338Z"></svg:path>`,
})
export class ArcticonsSynologyActiveInsightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
