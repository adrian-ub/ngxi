import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaMicOutlineIcon],svg[eva-mic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15a4 4 0 0 0 4-4V6a4 4 0 0 0-8 0v5a4 4 0 0 0 4 4m-2-9a2 2 0 0 1 4 0v5a2 2 0 0 1-4 0Z"></svg:path><svg:path fill="currentColor" d="M19 11a1 1 0 0 0-2 0a5 5 0 0 1-10 0a1 1 0 0 0-2 0a7 7 0 0 0 6 6.92V20H8.89a.89.89 0 0 0-.89.89v.22a.89.89 0 0 0 .89.89h6.22a.89.89 0 0 0 .89-.89v-.22a.89.89 0 0 0-.89-.89H13v-2.08A7 7 0 0 0 19 11"></svg:path>`,
})
export class EvaMicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
