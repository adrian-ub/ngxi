import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDkbbankingIcon],svg[arcticons-dkbbanking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.699 29.543V18.424m.001 0h4.68a2.79 2.79 0 0 1 2.788 2.788h0A2.79 2.79 0 0 1 34.38 24H29.7m0 0h4.68a2.79 2.79 0 0 1 2.788 2.788h0a2.79 2.79 0 0 1-2.788 2.788H29.7m-18.868 0V18.424h1.893A5.576 5.576 0 0 1 18.3 24h0a5.576 5.576 0 0 1-5.576 5.576zm10.388-11.16v11.152m1.442-5.576l4.118-5.539m-4.118 5.539l4.118 5.592m-4.118-5.592H21.22"></svg:path><svg:rect width="37" height="37" x="5.501" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsDkbbankingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
