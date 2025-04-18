import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteBookmarkOutlineIcon],svg[flowbite-bookmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 21l-5-4l-5 4V3.889a.92.92 0 0 1 .244-.629a.8.8 0 0 1 .59-.26h8.333a.8.8 0 0 1 .589.26a.92.92 0 0 1 .244.63z"></svg:path>`,
})
export class FlowbiteBookmarkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
