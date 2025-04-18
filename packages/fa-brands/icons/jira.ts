import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsJiraIcon],svg[fa-brands-jira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M490 241.7C417.1 169 320.6 71.8 248.5 0C83 164.9 6 241.7 6 241.7c-7.9 7.9-7.9 20.7 0 28.7C138.8 402.7 67.8 331.9 248.5 512c379.4-378 15.7-16.7 241.5-241.7c8-7.9 8-20.7 0-28.6m-241.5 90l-76-75.7l76-75.7l76 75.7z"></svg:path>`,
})
export class FaBrandsJiraIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
