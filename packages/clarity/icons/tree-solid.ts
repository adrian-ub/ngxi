import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTreeSolidIcon],svg[clarity-tree-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2C10.8 1.7 4.8 7.3 4.5 14.5S9.8 27.7 17 28v-5.2l-5.2-5.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0L17 20v-6.2l-2.7-2.7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0L19 13v3l3.3-3.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4L19 18.8V28c7.2-.3 12.8-6.3 12.5-13.5S25.2 1.7 18 2" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M18 28h-1v5c0 .6.4 1 1 1s1-.4 1-1v-5z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTreeSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
