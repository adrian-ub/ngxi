import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatCircleOutlineIcon],svg[topcoat-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 4.5C9.454 4.5.5 11.887.5 21s8.954 16.5 20 16.5s20-7.387 20-16.5s-8.954-16.5-20-16.5m-.031 30.791c-9.551 0-17.292-6.387-17.292-14.266S10.918 6.759 20.469 6.758s17.293 6.388 17.293 14.267c-.002 7.879-7.742 14.266-17.293 14.266"></svg:path>`,
})
export class TopcoatCircleOutlineIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
