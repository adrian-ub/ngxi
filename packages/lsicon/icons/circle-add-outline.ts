import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleAddOutlineIcon],svg[lsicon-circle-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 8h8M8 4v8m6.5-4a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"></svg:path>`,
})
export class LsiconCircleAddOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
