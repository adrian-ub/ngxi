import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiWindsIcon],svg[mynaui-winds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.325 7c3.485 0 3.485 5 0 5H3m15.411 9c3.452 0 3.452-5 0-5H3m7.872-13c3.506 0 3.506 5 0 5H3"></svg:path>`,
})
export class MynauiWindsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
