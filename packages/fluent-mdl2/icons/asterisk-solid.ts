import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AsteriskSolidIcon],svg[fluent-mdl2-asterisk-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1280 1024l695 401l-128 222l-695-401v802H896v-802l-695 401l-128-222l695-401L73 623l128-222l695 401V0h256v802l695-401l128 222z"></svg:path>`,
})
export class FluentMdl2AsteriskSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
