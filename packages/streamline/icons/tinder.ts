import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTinderIcon],svg[streamline-tinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.252 7.876c0 3.5-2.625 5.25-5.25 5.25s-5.25-1.75-5.25-5.25c0-2.625 1.312-3.937 2.187-4.375c0 1.313.438 2.188.875 2.625c2.625-.875 3.063-3.5 3.063-5.25c1.75 1.313 4.375 3.5 4.375 7"></svg:path>`,
})
export class StreamlineTinderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
