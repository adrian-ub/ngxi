import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPrismIcon],svg[token-prism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.974 19.877s.169.226-3.174-5.627l2.724-4.654l.867 1.626l-1.745 3.045l3.241 5.61zM13.74 6.602l.934 1.643l-3.658 6.005H5.917c.321-.563.659-1.149.957-1.689h3.067zm-1.947 8.773l2.622 4.502h-1.89l-1.7-2.813H4.263l.979-1.689z"></svg:path><svg:path fill="currentColor" d="M3.498 19.878a.505.505 0 0 1-.44-.743l.552-.945h6.46l.924 1.677c-.732.01-1.295.01-1.891.01zm17.462-.861s.248.86-.495.86h-.985l-3.27-5.554l.98-1.71zM11.556 4.368a.5.5 0 0 1 .856-.011l.613 1.024l-3.917 6.056H7.234z"></svg:path>`,
})
export class TokenPrismIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
