import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailAdd16FilledIcon],svg[fluent-mail-add-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V5H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H11zm-.5 7.5c.9 0 1.75-.216 2.5-.6V13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8.337l5.763 3.103a.5.5 0 0 0 .474 0l1.411-.76c.579.207 1.202.32 1.852.32M3 5h2.022a5.5 5.5 0 0 0 2.522 5.14L7 10.431l-6-3.23V7a2 2 0 0 1 2-2"></svg:path>`,
})
export class FluentMailAdd16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
