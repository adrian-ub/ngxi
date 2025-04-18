import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatCircleIcon],svg[topcoat-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 5.5C9.454 5.5.5 12.887.5 22s8.954 16.5 20 16.5s20-7.387 20-16.5s-8.954-16.5-20-16.5"></svg:path>`,
})
export class TopcoatCircleIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
