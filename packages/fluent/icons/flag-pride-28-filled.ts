import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlagPride28FilledIcon],svg[fluent-flag-pride-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#745125" d="M5 4.25h18V6H5z"></svg:path><svg:path fill="#E62C46" d="M5 6h18v2H5z"></svg:path><svg:path fill="#F36D38" d="M5 8h18v2H5z"></svg:path><svg:path fill="#FFD23E" d="M5 10h18v1H5z"></svg:path><svg:path fill="#61BC51" d="M5 11h18v2H5z"></svg:path><svg:path fill="#1793E8" d="M5 13h18v2H5z"></svg:path><svg:path fill="#B73FBB" d="M5 15h18v2H5z"></svg:path><svg:path d="M4.75 3a.75.75 0 0 0-.75.75v20.5a.75.75 0 0 0 1.5 0V18h17.75a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75H4.75zm.75 1.5h17v12h-17v-12z" fill="#212121"></svg:path></svg:g>`,
})
export class FluentFlagPride28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
