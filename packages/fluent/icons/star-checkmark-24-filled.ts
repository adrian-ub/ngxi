import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarCheckmark24FilledIcon],svg[fluent-star-checkmark-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.209 3.103c-.495-1.003-1.926-1.003-2.421 0L8.43 7.881l-5.273.766c-1.107.16-1.55 1.522-.748 2.303l3.815 3.719l-.9 5.25c-.19 1.104.968 1.945 1.959 1.424l3.958-2.081a6.5 6.5 0 0 1 9.441-7.43l.906-.882c.8-.781.359-2.142-.748-2.303l-5.273-.766zM23 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-2.146-2.354a.5.5 0 0 0-.708 0L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class FluentStarCheckmark24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
