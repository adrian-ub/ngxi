import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laGripVerticalIcon],svg[la-grip-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2v8h8V2zm10 0v8h8V2zM9 4h4v4H9zm10 0h4v4h-4zM7 12v8h8v-8zm10 0v8h8v-8zm-8 2h4v4H9zm10 0h4v4h-4zM7 22v8h8v-8zm10 0v8h8v-8zm-8 2h4v4H9zm10 0h4v4h-4z"></svg:path>`,
})
export class LaGripVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
