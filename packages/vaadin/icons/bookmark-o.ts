import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinBookmarkOIcon],svg[vaadin-bookmark-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v16l5-5l5 5V0zm9 13.7L8 9.8l-4 3.9V3h8zM12 2H4V1h8z"></svg:path>`,
})
export class VaadinBookmarkOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
