import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiConfigSolidIcon],svg[mynaui-config-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 2.25a.75.75 0 0 1 .75.75v4A.75.75 0 0 1 13 7V5.75H3a.75.75 0 0 1 0-1.5h10V3a.75.75 0 0 1 .75-.75M17.25 5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-6.5 4.25a.75.75 0 0 1 .75.75v1.25H21a.75.75 0 0 1 0 1.5h-9.5V14a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75M2.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m11.5 4.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-1.25H3a.75.75 0 0 1 0-1.5h10V17a.75.75 0 0 1 .75-.75m3.5 2.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiConfigSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
