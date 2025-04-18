import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityFirewallOutlineBadgedIcon],svg[clarity-firewall-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 13.5a7.5 7.5 0 0 1-2.45-.42H23.8v-2.86a7.5 7.5 0 0 1-.63-1.14H22v4h-8v-4h-2v4H4V8h18.78a7.5 7.5 0 0 1-.28-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.45 7.45 0 0 1-4 1.16M4 15h28v6.08h-3.08v-4.81H27v4.81h-8.08v-4.81H17v4.81H8.9v-4.81H7v4.81H4Zm19.8 13v-3.73h-1.6V28H14v-3.73h-1.6V28H4v-5h28v5Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityFirewallOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
