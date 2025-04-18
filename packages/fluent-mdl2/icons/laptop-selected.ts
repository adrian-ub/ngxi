import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2LaptopSelectedIcon],svg[fluent-mdl2-laptop-selected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1016 1592l72 72H128q-25 0-48-10t-41-29t-28-41t-11-48q0-16 3-36t10-39t16-36t22-30l205-206V384h1408v805l-91 91H347l-203 202q-3 3-6 10t-5 16t-4 16t-1 12h945zm-632-440h1152V512H384zm1645 158l-557 557l-269-269l90-91l179 179l467-467z"></svg:path>`,
})
export class FluentMdl2LaptopSelectedIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
