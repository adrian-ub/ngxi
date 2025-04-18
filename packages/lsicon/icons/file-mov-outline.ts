import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFileMovOutlineIcon],svg[lsicon-file-mov-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M7.5 12V7.5H7L6 10L5 7.5h-.5V12m8-5c0 .5 1 4.5 1 4.5c.39-1.757 1-4 1-4.5m-3 6.5v1h-9v-13h6m0 0v3h3m-3-3H9L11.5 4v.5m0 0V6m-.5 5.5v-4H9v4z"></svg:path>`,
})
export class LsiconFileMovOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
