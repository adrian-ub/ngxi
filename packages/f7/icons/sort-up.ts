import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7SortUpIcon],svg[f7-sort-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.2 10c.513 0 .981.194 1.336.512l.178.174l7.071 7.071a2 2 0 0 1-2.828 2.829l-3.758-3.758V44a2 2 0 1 1-4 0V16.8l-3.785 3.786a2 2 0 0 1-2.828-2.829l7.07-7.07l.122-.113l.128-.1c.349-.296.8-.474 1.293-.474M47 40a2 2 0 1 1 0 4H23a2 2 0 1 1 0-4zm-8-8a2 2 0 1 1 0 4H23a2 2 0 1 1 0-4zm-8-8a2 2 0 1 1 0 4h-8a2 2 0 1 1 0-4z"></svg:path>`,
})
export class F7SortUpIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
