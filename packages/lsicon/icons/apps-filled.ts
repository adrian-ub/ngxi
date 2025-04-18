import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAppsFilledIcon],svg[lsicon-apps-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5H2.5A.5.5 0 0 1 2 7zm6.5 0A.5.5 0 0 1 9 2h4.5a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5zM2 9a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5zm6.5 0a.5.5 0 0 1 .5-.5h4.5a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAppsFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
