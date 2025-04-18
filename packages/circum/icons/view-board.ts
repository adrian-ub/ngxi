import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumViewBoardIcon],svg[circum-view-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.437 20.936H5.563a2.5 2.5 0 0 1-2.5-2.5V5.562a2.5 2.5 0 0 1 2.5-2.5h12.874a2.5 2.5 0 0 1 2.5 2.5v12.874a2.5 2.5 0 0 1-2.5 2.5M5.563 4.062a1.5 1.5 0 0 0-1.5 1.5v12.874a1.5 1.5 0 0 0 1.5 1.5h12.874a1.5 1.5 0 0 0 1.5-1.5V5.562a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path><svg:path fill="currentColor" d="M12.5 14.544a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 1 0Zm4.217-2.091a.5.5 0 0 1-1 0V6.544a.5.5 0 0 1 1 0ZM8.28 6.544a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0Z"></svg:path>`,
})
export class CircumViewBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
