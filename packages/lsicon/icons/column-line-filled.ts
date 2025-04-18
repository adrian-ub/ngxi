import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconColumnLineFilledIcon],svg[lsicon-column-line-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 13.5V2h1v11h1V7h4v6h1V9h4v4h1v1H2.5a.5.5 0 0 1-.5-.5M13.854 2.854L9.5 7.207L7.386 5.093L4.197 6.46l-.394-.92l3.811-1.633L9.5 5.793l3.646-3.647z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconColumnLineFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
