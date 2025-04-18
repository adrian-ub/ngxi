import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenParibuIcon],svg[token-paribu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.931 11.504q.252-.153.405-.432q.152-.277.152-.73q0-.451-.152-.73a1.1 1.1 0 0 0-.405-.432a1.6 1.6 0 0 0-.585-.206a4.4 4.4 0 0 0-.69-.053h-1.62v2.842h1.62q.358 0 .69-.053t.585-.206"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21 21H3V3h18zM15.448 8.382q.365.396.533.906q.168.508.168 1.055q0 .534-.168 1.049a2.4 2.4 0 0 1-.533.912q-.365.396-.95.639q-.582.241-1.414.242h-2.048V16.5H9.142v-3.315H7.85v-1.422h1.29V8.922H7.85V7.5h5.233q.831.001 1.414.242q.584.243.95.64" clip-rule="evenodd"></svg:path>`,
})
export class TokenParibuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
