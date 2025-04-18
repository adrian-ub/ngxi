import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseRingFillIcon],svg[lets-icons-close-ring-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m1.293-6.293a1 1 0 0 0 1.414-1.414L13.414 12l1.293-1.293a1 1 0 0 0-1.414-1.414L12 10.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L10.586 12l-1.293 1.293a1 1 0 1 0 1.414 1.414L12 13.414zm1.386-9.174A7 7 0 0 0 7.05 16.95a1 1 0 1 0 1.414-1.414A5 5 0 1 1 12 17a1 1 0 1 0 0 2a7 7 0 0 0 2.679-13.467" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCloseRingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
