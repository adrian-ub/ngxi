import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSubnetAclRulesIcon],svg[carbon-subnet-acl-rules-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14h12v2H18zm0 5h8v2h-8zm0-10h12v2H18z"></svg:path><svg:path fill="currentColor" d="M22 24v4H6V16h8v-2h-4V8a4 4 0 0 1 7.668-1.6l1.832-.8A6.001 6.001 0 0 0 8 8v6H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4Z"></svg:path>`,
})
export class CarbonSubnetAclRulesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
