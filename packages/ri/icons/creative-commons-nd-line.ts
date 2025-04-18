import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCreativeCommonsNdLineIcon],svg[ri-creative-commons-nd-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9h8v2H8zm0 6v-2h8v2zm-6-3C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16"></svg:path>`,
})
export class RiCreativeCommonsNdLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
