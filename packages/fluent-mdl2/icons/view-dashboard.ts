import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ViewDashboardIcon],svg[fluent-mdl2-view-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 0v2048H0V0zm-128 128h-640v512h640zm-640 1152h640V768h-640zM128 128v1152h1024V128zm0 1792h640v-512H128zm1792 0v-512H896v512z"></svg:path>`,
})
export class FluentMdl2ViewDashboardIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
