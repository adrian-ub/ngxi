import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSunnyIcon],svg[tdesign-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v3h-2V1zm7.485 3.928L18.364 7.05L16.95 5.636l2.121-2.122zM4.93 3.514l2.12 2.122L5.636 7.05L3.515 4.929zM12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0a6 6 0 0 1-12 0m-5-1h3v2H1zm19 0h3v2h-3zM7.05 18.363l-2.12 2.123l-1.415-1.416l2.121-2.122zm11.314-1.414l2.121 2.122l-1.414 1.414l-2.121-2.121zM13 20v3h-2v-3z"></svg:path>`,
})
export class TdesignSunnyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
