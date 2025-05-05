import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconForumIcon],svg[picon-forum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6V5h5V1h1v6L7 6M0 5V0h6v4H1"></svg:path>`,
})
export class PiconForumIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
