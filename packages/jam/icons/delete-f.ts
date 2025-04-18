import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDeleteFIcon],svg[jam-delete-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.414 7l1.414-1.414a1 1 0 0 0-1.414-1.414L13 5.586l-1.414-1.414a1 1 0 1 0-1.414 1.414L11.586 7l-1.414 1.414a1 1 0 1 0 1.414 1.414L13 8.414l1.414 1.414a1 1 0 1 0 1.414-1.414zM7.828 0H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.828a2 2 0 0 1-1.414-.586L.707 7.707a1 1 0 0 1 0-1.414L6.414.586A2 2 0 0 1 7.828 0"></svg:path>`,
})
export class JamDeleteFIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
