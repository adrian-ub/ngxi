import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlagPride16FilledIcon],svg[fluent-flag-pride-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#745125" d="M3 3h10v1H3z"></svg:path><svg:path fill="#E62C46" d="M3 4h10v1H3z"></svg:path><svg:path fill="#F36D38" d="M3 5h10v1H3z"></svg:path><svg:path fill="#FFD23E" d="M3 6h10v1H3z"></svg:path><svg:path fill="#61BC51" d="M3 7h10v1H3z"></svg:path><svg:path fill="#1793E8" d="M3 8h10v1H3z"></svg:path><svg:path fill="#B73FBB" d="M3 9h10v1H3z"></svg:path><svg:path d="M2.5 2h11a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H3v2.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zM3 3v7h10V3H3z" fill="#212121"></svg:path></svg:g>`,
})
export class FluentFlagPride16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
