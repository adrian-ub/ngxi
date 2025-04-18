import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceHeadphonesIcon],svg[guidance-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M22.5 13.5a6.58 6.58 0 0 1-4.369-1.66l-.381-.34h-.25v11h.25l.381-.34A6.58 6.58 0 0 1 22.5 20.5V12c0-5.799-4.701-10.5-10.5-10.5S1.5 6.201 1.5 12v8.5c1.61 0 3.165.591 4.369 1.66l.381.34h.25v-11h-.25l-.381.34A6.58 6.58 0 0 1 1.5 13.5"></svg:path>`,
})
export class GuidanceHeadphonesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
