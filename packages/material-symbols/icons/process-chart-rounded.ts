import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsProcessChartRoundedIcon],svg[material-symbols-process-chart-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.4 18q-.375-.2-.512-.587t.062-.763l5.1-10.2q.2-.375.588-.512T8.4 6t.513.588t-.063.762l-5.1 10.2q-.2.375-.587.513T2.4 18M9 18q-.375-.2-.513-.587t.063-.763l5.1-10.2q.2-.375.588-.512T15 6t.513.588t-.063.762l-5.1 10.2q-.2.375-.587.513T9 18m6.6 0q-.375-.2-.512-.587t.062-.763l5.1-10.2q.2-.375.588-.512T21.6 6t.513.588t-.063.762l-5.1 10.2q-.2.375-.587.513T15.6 18"></svg:path>`,
})
export class MaterialSymbolsProcessChartRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
