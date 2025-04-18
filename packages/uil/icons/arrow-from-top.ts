import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilArrowFromTopIcon],svg[uil-arrow-from-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.29 16.29L13 18.59V7a1 1 0 0 0-2 0v11.59l-2.29-2.3a1 1 0 1 0-1.42 1.42l4 4a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l4-4a1 1 0 0 0-1.42-1.42M19 2H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilArrowFromTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
