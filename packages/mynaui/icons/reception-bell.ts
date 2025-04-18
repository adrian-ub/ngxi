import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiReceptionBellIcon],svg[mynaui-reception-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 19h18M12 8V5m0 3h-2a5 5 0 0 0-5 5v3h14v-3a5 5 0 0 0-5-5zm0-3h-2m2 0h2"></svg:path>`,
})
export class MynauiReceptionBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
