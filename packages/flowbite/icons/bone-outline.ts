import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteBoneOutlineIcon],svg[flowbite-bone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M16.888 7.112c.179-.775-.12-1.669-.715-2.265c-1.014-1.013-2.564-1.013-3.577 0s-1.013 2.563 0 3.576l-4.173 4.173c-1.013-1.013-2.563-1.013-3.576 0s-1.013 2.563 0 3.577c.596.596 1.49.894 2.265.715c-.179.775.12 1.669.715 2.265c1.014 1.013 2.564 1.013 3.577 0s1.013-2.563 0-3.576l4.173-4.173c1.013 1.013 2.563 1.013 3.576 0s1.013-2.563 0-3.577c-.596-.596-1.49-.894-2.265-.715"></svg:path>`,
})
export class FlowbiteBoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
