import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilDizzyMehIcon],svg[uil-dizzy-meh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 11.71l.29-.3l.29.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-.3-.29l.3-.29a1 1 0 0 0-1.46-1.42l-.29.3l-.25-.3a1 1 0 1 0-1.46 1.42l.3.29l-.3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0ZM15 14H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m5-11.71a1 1 0 0 0-1.42 0l-.29.3l-.29-.3a1 1 0 0 0-1.42 1.42l.3.29l-.3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l.29-.3l.29.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-.3-.29l.3-.29a1 1 0 0 0 0-1.42"></svg:path>`,
})
export class UilDizzyMehIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
