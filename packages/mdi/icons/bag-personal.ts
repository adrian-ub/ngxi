import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBagPersonalIcon],svg[mdi-bag-personal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1a4 4 0 0 0-4 4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a4 4 0 0 0-4-4m-6-1h4v1h-4zm2 5l2 2l-2 2l-2-2zm6 7H9v2H8v-2H6v-1h12z"></svg:path>`,
})
export class MdiBagPersonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
