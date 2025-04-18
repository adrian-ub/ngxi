import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibJiraIcon],svg[cib-jira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.099 15.104L16 0L.896 15.104a1.273 1.273 0 0 0 0 1.797L16 32l15.099-15.099c.5-.49.5-1.302 0-1.797M16 20.734L11.266 16L16 11.271L20.729 16z"></svg:path>`,
})
export class CibJiraIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
