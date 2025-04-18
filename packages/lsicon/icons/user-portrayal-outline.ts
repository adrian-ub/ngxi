import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUserPortrayalOutlineIcon],svg[lsicon-user-portrayal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 13a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3m10.5-5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0ZM10 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path>`,
})
export class LsiconUserPortrayalOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
