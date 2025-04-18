import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlagPride24FilledIcon],svg[fluent-flag-pride-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#745125" d="M4 4.25h16v1.5H4z"></svg:path><svg:path fill="#E62C46" d="M4 5.75h16v1.5H4z"></svg:path><svg:path fill="#F36D38" d="M4 7.25h16V9H4z"></svg:path><svg:path fill="#FFD23E" d="M4 9h16v1.5H4z"></svg:path><svg:path fill="#61BC51" d="M4 10.5h16v1.75H4z"></svg:path><svg:path fill="#1793E8" d="M4 12.25h16v1.5H4z"></svg:path><svg:path fill="#B73FBB" d="M4 13.75h17v1.5H4z"></svg:path><svg:path d="M3.75 3a.75.75 0 0 0-.75.75v17.5a.75.75 0 0 0 1.5 0V16.5h15.75a.75.75 0 0 0 .75-.75v-12a.75.75 0 0 0-.75-.75H3.75zm.75 1.5h15V15h-15V4.5z" fill="#212121"></svg:path></svg:g>`,
})
export class FluentFlagPride24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
