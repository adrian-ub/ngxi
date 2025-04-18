import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibElasticStackIcon],svg[cib-elastic-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.094 3.266A3.2 3.2 0 0 1 3.266.094h25.469a3.2 3.2 0 0 1 3.172 3.172v6.375H.094zm0 19.093h15.104v9.547H3.266a3.17 3.17 0 0 1-3.172-3.094zm16.708 0h15.104v6.375c0 1.703-1.469 3.172-3.172 3.172H16.802zM.094 11.229h31.813v9.542H.094z"></svg:path>`,
})
export class CibElasticStackIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
