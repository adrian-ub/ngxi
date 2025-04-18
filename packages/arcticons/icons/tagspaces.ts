import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTagspacesIcon],svg[arcticons-tagspaces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.769 5.585L5.5 26.85l15.565 15.565L42.5 20.98V5.584Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.433 34.277l3.46-3.46l4.886 4.885l-3.46 3.46zm3.332-7.996l3.46-3.46l7.217 7.216l-3.46 3.46zm2.394-8.934l3.46-3.461l10.488 10.487l-3.461 3.46z"></svg:path><svg:circle cx="34.38" cy="11.974" r="3.119" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="rotate(-89.236 34.38 11.974)"></svg:circle>`,
})
export class ArcticonsTagspacesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
