import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChinaUniversityMoocIcon],svg[arcticons-china-university-mooc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.387 11.974v15.873c7.622 1.255 14.384 2.87 19.378 5.227V18.221a47.9 47.9 0 0 0-19.378-6.247"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.113 15.926v15.618a99.4 99.4 0 0 0-19.57 5.482V22.173c5.708-3.83 12.444-5.492 19.57-6.247"></svg:path>`,
})
export class ArcticonsChinaUniversityMoocIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
