import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlagPride20FilledIcon],svg[fluent-flag-pride-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#745125" d="M4 4h12v1H4z"></svg:path><svg:path fill="#E62C46" d="M4 5h12v1H4z"></svg:path><svg:path fill="#F36D38" d="M4 6h12v1H4z"></svg:path><svg:path fill="#FFD23E" d="M4 7h12v1H4z"></svg:path><svg:path fill="#61BC51" d="M4 8h12v1H4z"></svg:path><svg:path fill="#1793E8" d="M4 9h12v1H4z"></svg:path><svg:path fill="#B73FBB" d="M4 10h12v1H4z"></svg:path><svg:path d="M3.5 3h13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H4v5.5a.5.5 0 0 1-1 0v-14a.5.5 0 0 1 .5-.5zM4 4v7h12V4H4z" fill="#212121"></svg:path></svg:g>`,
})
export class FluentFlagPride20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
