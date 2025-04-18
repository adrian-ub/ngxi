import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiShieldSlashIcon],svg[mynaui-shield-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 21l4.27-4.27M21 3l-2.561 2.561m0 0l.104.011c.26.027.457.25.457.515v4.93c0 4.57-4.832 8.577-6.467 9.802a.88.88 0 0 1-1.066 0c-.886-.663-2.711-2.144-4.197-4.09M18.44 5.562L7.27 16.73M5.646 14c-.4-.949-.646-1.951-.646-2.983v-4.93c0-.266.198-.488.457-.515a12.05 12.05 0 0 0 5.582-2.046l.61-.417a.62.62 0 0 1 .702 0l.61.417c.646.442 1.329.817 2.039 1.124"></svg:path>`,
})
export class MynauiShieldSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
