import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLinkPerson32RegularIcon],svg[fluent-link-person-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a7 7 0 0 0 0 14h4a1 1 0 1 0 0-2H9A5 5 0 0 1 9 8h4a1 1 0 1 0 0-2zm14 0a7 7 0 0 1 5.643 11.142a5 5 0 0 0-1.228-1.794A5 5 0 0 0 23 8h-4a1 1 0 1 1 0-2zM8.5 13a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2h-13a1 1 0 0 1-1-1m19 6a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m2.5 7.438c0 2.023-1.714 4.062-6 4.062s-6-2.031-6-4.062C18 25.102 19.082 24 20.417 24h7.166C28.918 24 30 25.102 30 26.438"></svg:path>`,
})
export class FluentLinkPerson32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
