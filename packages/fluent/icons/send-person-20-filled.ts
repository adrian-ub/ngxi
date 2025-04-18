import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSendPerson20FilledIcon],svg[fluent-send-person-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.724 2.053a.5.5 0 0 0-.707.576l1.498 5.618a.5.5 0 0 0 .4.364l6.855 1.142c.279.047.279.447 0 .494l-6.854 1.142a.5.5 0 0 0-.401.364l-1.498 5.618a.5.5 0 0 0 .707.576L12.5 13.06V13a3 3 0 0 1 4.847-2.364l.377-.189a.5.5 0 0 0 0-.894zM17.5 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 18.75 12 17.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5"></svg:path>`,
})
export class FluentSendPerson20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
