import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLink16RegularIcon],svg[fluent-link-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 4h1a3.5 3.5 0 0 1 .194 6.995l-.192.005l-1 .005a.5.5 0 0 1-.094-.992l.09-.008L10.5 10a2.5 2.5 0 0 0 .164-4.995L10.5 5h-1a.5.5 0 0 1-.09-.992zh1zm-4 0h1a.5.5 0 0 1 .09.992L6.5 5h-1a2.5 2.5 0 0 0-.164 4.995L5.5 10h1a.5.5 0 0 1 .09.992L6.5 11h-1a3.5 3.5 0 0 1-.192-6.995zh1zm0 3l5 .002a.5.5 0 0 1 .09.992l-.09.008L5.5 8a.5.5 0 0 1-.09-.992z"></svg:path>`,
})
export class FluentLink16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
