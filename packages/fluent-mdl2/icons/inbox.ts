import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2InboxIcon],svg[fluent-mdl2-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 1276q1 3 1 48t1 113v146q0 79-1 149t0 123t-1 65H0v-65q0-52-1-122t0-150t-1-146v-113q0-45 2-48L383 128h1154zm-128 132h-344l-128 256H600l-128-256H128v384h1664zm-6-128L1445 256H475L134 1280h418l128 256h560l128-256z"></svg:path>`,
})
export class FluentMdl2InboxIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
