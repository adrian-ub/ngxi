import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftFinanceAndOperationsIcon],svg[arcticons-microsoft-finance-and-operations-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.449 17.7L21.531 29.618a.96.96 0 0 1-1.362 0L8.933 18.382a.96.96 0 0 1 0-1.363L20.169 5.784a.96.96 0 0 1 1.362 0L39.067 23.32a.96.96 0 0 1 0 1.362L21.531 42.217a.96.96 0 0 1-1.362 0L8.933 30.981a.96.96 0 0 1 0-1.362l11.236-11.237a.96.96 0 0 1 1.362 0L33.45 30.3"></svg:path>`,
})
export class ArcticonsMicrosoftFinanceAndOperationsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
