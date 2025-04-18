import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailAll20FilledIcon],svg[fluent-mail-all-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M16 12.5V6.373L9.254 9.931a.5.5 0 0 1-.507 0L2 6.373V12.5A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5z" fill="currentColor"></svg:path><svg:path d="M15.985 5.223A2.5 2.5 0 0 0 13.5 3h-9a2.5 2.5 0 0 0-2.485 2.223L9 8.92l6.985-3.697z" fill="currentColor"></svg:path><svg:path d="M6.5 17a2.496 2.496 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-7c.607.456 1 1.182 1 2v5a4.5 4.5 0 0 1-4.5 4.5h-7z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentMailAll20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
