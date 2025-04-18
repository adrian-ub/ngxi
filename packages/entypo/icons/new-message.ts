import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoNewMessageIcon],svg[entypo-new-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.174 1.826c-1.102-1.102-2.082-.777-2.082-.777L7.453 9.681L6 14l4.317-1.454l8.634-8.638s.324-.98-.777-2.082m-7.569 9.779l-.471.47l-1.473.5a2.2 2.2 0 0 0-.498-.74a2.2 2.2 0 0 0-.74-.498l.5-1.473l.471-.47s.776-.089 1.537.673c.762.761.674 1.538.674 1.538M16 17H3V4h5l2-2H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-7l-2 2z"></svg:path>`,
})
export class EntypoNewMessageIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
