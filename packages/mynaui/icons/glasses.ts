import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiGlassesIcon],svg[mynaui-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.5 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-9 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path d="M13.5 15.16c-1.042-.371-1.937-.379-3 0m9-.16l-.572-6.296c-.166-1.825-.73-2.14-2.428-2.704m-12 9l.572-6.296C5.238 6.88 5.802 6.564 7.5 6"></svg:path></svg:g>`,
})
export class MynauiGlassesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
