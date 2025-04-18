import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilAlignCenterVIcon],svg[uil-align-center-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.21 6.21l.79-.8V8a1 1 0 0 0 2 0V5.41l.79.8a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-2.5-2.5a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-2.5 2.5a1 1 0 0 0 1.42 1.42M16 11H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m-2.21 6.79l-.79.8V16a1 1 0 0 0-2 0v2.59l-.79-.8a1 1 0 0 0-1.42 1.42l2.5 2.5a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l2.5-2.5a1 1 0 0 0-1.42-1.42"></svg:path>`,
})
export class UilAlignCenterVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
