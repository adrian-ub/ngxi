import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolCommentIcon],svg[websymbol-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1137 101v532q0 41-29.5 70.5T1037 733H869v268L602 733H100q-41 0-70.5-29.5T0 633V101q0-41 29.5-70.5T100 1h937q41 0 70.5 29.5T1137 101"></svg:path>`,
})
export class WebsymbolCommentIcon {
  readonly viewBox = input("0 0 1137 1000")
  readonly width = input("1.14em")
  readonly height = input("1em")
}
