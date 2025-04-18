import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPercentFilledIcon],svg[lsicon-percent-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 4.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m.146 8.146l10-10l.708.708l-10 10zM9.5 11.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPercentFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
