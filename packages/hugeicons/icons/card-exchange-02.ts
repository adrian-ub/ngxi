import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCardExchange02Icon],svg[hugeicons-card-exchange-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 14.006a5.994 5.994 0 0 1-6 5.996l.857-1.713M2 10.009a5.994 5.994 0 0 1 6-5.996l-.857 1.713m3.823-.202h10.806m-8.306 5.47H19.5A2.5 2.5 0 0 0 22 8.496v-4A2.5 2.5 0 0 0 19.5 2h-6.034a2.5 2.5 0 0 0-2.5 2.498v4a2.5 2.5 0 0 0 2.5 2.497M2 16.532h10.807M4.5 22.002h6.034a2.5 2.5 0 0 0 2.5-2.499v-3.999a2.5 2.5 0 0 0-2.5-2.498H4.5A2.5 2.5 0 0 0 2 15.504v4a2.5 2.5 0 0 0 2.5 2.498" color="currentColor"></svg:path>`,
})
export class HugeiconsCardExchange02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
