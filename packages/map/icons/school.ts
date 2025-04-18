import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapSchoolIcon],svg[map-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 8v33H6V8zm4-4H2v42h32zM9 12h18v4H9zm0 7h18v4H9zm0 7h18v4H9zm0 7h18v4H9zm31-21h8v28h-8zm4.006-11C41.812 1 40 2.765 40 4.937V9h8V4.937C48 2.765 46.191 1 44.006 1m-4.068 42l4.041 6.387L48 43z"></svg:path>`,
})
export class MapSchoolIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
