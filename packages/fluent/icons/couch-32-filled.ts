import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCouch32FilledIcon],svg[fluent-couch-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6H9a4 4 0 0 0-4 4v1.025Q5.246 11 5.5 11a5 5 0 0 1 4.975 4.5h11.05A5 5 0 0 1 27 11.025V10a4 4 0 0 0-4-4m4 6.535A3.5 3.5 0 0 0 23 16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1a3.5 3.5 0 1 0-7 0v4a4 4 0 0 0 3 3.874V26a1 1 0 1 0 2 0v-2h18v2a1 1 0 1 0 2 0v-2.126c1.725-.444 3-2.01 3-3.874v-4a3.5 3.5 0 0 0-3-3.465"></svg:path>`,
})
export class FluentCouch32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
