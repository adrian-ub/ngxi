import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feDistributeVerticallyIcon],svg[fe-distribute-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 10h10a2 2 0 1 1 0 4H7a2 2 0 1 1 0-4m-4 7h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2M3 5h18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2"></svg:path>`,
})
export class FeDistributeVerticallyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
