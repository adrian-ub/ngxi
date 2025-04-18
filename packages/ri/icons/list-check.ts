import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riListCheckIcon],svg[ri-list-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h13v2H8zm-5-.5h3v3H3zm0 7h3v3H3zm0 7h3v3H3zM8 11h13v2H8zm0 7h13v2H8z"></svg:path>`,
})
export class RiListCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
