import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHttpConnectIcon],svg[tabler-http-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0m10 2V8l4 8V8m-9 0a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2"></svg:path>`,
})
export class TablerHttpConnectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
