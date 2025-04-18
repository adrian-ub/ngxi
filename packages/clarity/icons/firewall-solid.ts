import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityFirewallSolidIcon],svg[clarity-firewall-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M14 28h-2v-4h2Zm10 0h-2v-4h2Zm8-6H4v-2h3v-4h2v4h8v-4h2v4h8v-4h2v4h3Zm0-8H4v-2h8V8h2v4h8V8h2v4h8Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityFirewallSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
