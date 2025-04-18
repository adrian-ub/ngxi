import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsVimeoIcon],svg[meteor-icons-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 7.5q9-10 10 1t5 2q1.8-4.1-2.5-3q1.5-5 6.5-5t2 7t-8 10.6t-6.8-3.6t-2.6-8t-2.6.6Z"></svg:path>`,
})
export class MeteorIconsVimeoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
