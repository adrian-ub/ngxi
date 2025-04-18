import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMilkOatIcon],svg[hugeicons-milk-oat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.64 20.636c1.53-1.529 2.077-3.46 0-5.536c-2.077-2.077-5.539-2.769-6.924-1.384m6.924 6.92c-1.53 1.529-3.462 2.076-5.539 0s-2.77-5.536-1.385-6.92m6.924 6.92l-6.924-6.92m-1.774 8.283h-3.94M4.985 4.945L2.562 7.457A2 2 0 0 0 2 8.847v11.152a2 2 0 0 0 2 2h4M4.986 4.945L8 8.039M4.986 4.946V3.502a1.5 1.5 0 0 1 1.5-1.5h7.553a1.5 1.5 0 0 1 1.5 1.53l-.021 1.034a1 1 0 0 0 .222.649l2.286 2.824m-10.025 0v13.96m0-13.96h10.025m0 0v2.444" color="currentColor"></svg:path>`,
})
export class HugeiconsMilkOatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
