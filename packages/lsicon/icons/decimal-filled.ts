import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDecimalFilledIcon],svg[lsicon-decimal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 3.5h5v9h-5zm1 1v7h3v-7zm7-1H14v1h-3.5v3H14v5H9.5v-1H13v-3H9.5zm-2.25 8.495a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDecimalFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
