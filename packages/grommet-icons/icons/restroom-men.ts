import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsRestroomMenIcon],svg[grommet-icons-restroom-men-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 13.5L11 8l-1 13m7-7.5L13 8l1 13M12 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-1 3h2v5.5h-2z"></svg:path>`,
})
export class GrommetIconsRestroomMenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
