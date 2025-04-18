import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagMaldivesIcon],svg[twemoji-flag-maldives-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D21034" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#007E3A" d="M6 11h24v14H6z"></svg:path><svg:path fill="#FFF" d="M19.64 22.344q.419-.001.814-.077a4.344 4.344 0 0 1 0-8.532a4.344 4.344 0 1 0-.814 8.609"></svg:path>`,
})
export class TwemojiFlagMaldivesIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
