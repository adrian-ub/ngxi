import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciPieChartOutlineIcon],svg[ci-pie-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10ZM11 4.062a8 8 0 1 0 5.419 14.608l-.1.071l.094-.065l.059-.041l.064-.045l.016-.011l.009-.007l-5.128-5.13A1.51 1.51 0 0 1 11 12.379V4.062ZM13.829 13l4.227 4.227l.007-.008l.005-.006l-.01.011A7.944 7.944 0 0 0 19.938 13h-6.109ZM13 4.062V11h6.938A8 8 0 0 0 13 4.062Z"></svg:path>`,
})
export class CiPieChartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
