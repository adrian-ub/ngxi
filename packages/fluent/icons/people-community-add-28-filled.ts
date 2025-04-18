import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleCommunityAdd28FilledIcon],svg[fluent-people-community-add-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3a4 4 0 1 0 0 8a4 4 0 0 0 0-8M2 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M22.5 6a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m-11.75 7A1.75 1.75 0 0 0 9 14.75V20a5 5 0 0 0 5.482 4.977a7.503 7.503 0 0 1 3.797-11.643A1.74 1.74 0 0 0 17.25 13zM8 14.752l-4.703 1.26a1.75 1.75 0 0 0-1.237 2.144l.841 3.139a5 5 0 0 0 7.088 3.168A6 6 0 0 1 8 20zM27 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21z"></svg:path>`,
})
export class FluentPeopleCommunityAdd28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
