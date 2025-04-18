import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGolfBallIcon],svg[hugeicons-golf-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="9" r="7"></svg:circle><svg:path d="M10.008 7h-.01M9 18c1.5 0 3 1.462 3 4c0-2.538 1.5-4 3-4"></svg:path></svg:g>`,
})
export class HugeiconsGolfBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
