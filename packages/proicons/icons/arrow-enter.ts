import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowEnterIcon],svg[proicons-arrow-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.75 5.623V9.52a4 4 0 0 1-4 4H3.871m4.236 4.857L4.31 14.58a1.5 1.5 0 0 1-.44-1.061m4.236-4.857L4.31 12.46c-.293.293-.44.677-.44 1.061"></svg:path>`,
})
export class ProiconsArrowEnterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
