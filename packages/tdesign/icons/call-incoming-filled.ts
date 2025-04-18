import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCallIncomingFilledIcon],svg[tdesign-call-incoming-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.739 6.671l3.293-3.293l-1.414-1.414l-3.294 3.293l-.045-2.119l-2 .043l.117 5.419l5.418.116l.043-2z"></svg:path><svg:path fill="currentColor" d="M9.58 2H1v1a19.9 19.9 0 0 0 3.196 10.85a20.1 20.1 0 0 0 5.954 5.954A19.9 19.9 0 0 0 21 23h1v-8.58l-6.69-1.487l-1.86 1.86a14.1 14.1 0 0 1-4.242-4.243l1.859-1.86z"></svg:path>`,
})
export class TdesignCallIncomingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
