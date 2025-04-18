import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCeilinglightIcon],svg[whh-ceilinglight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 64H576v512h128l320 448H0l320-448h128V64H288q-13 0-22.5-9.5T256 32t9.5-22.5T288 0h448q13 0 22.5 9.5T768 32t-9.5 22.5T736 64"></svg:path>`,
})
export class WhhCeilinglightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
