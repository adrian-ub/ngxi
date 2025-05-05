import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCarSignalIcon],svg[hugeicons-car-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 17.922V20.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C18 21.199 18 20.966 18 20.5s0-.699-.076-.883a1 1 0 0 0-.541-.54C17.199 19 16.966 19 16.5 19h-10c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541C5 19.801 5 20.034 5 20.5s0 .699-.076.883a1 1 0 0 1-.541.54C4.199 22 3.966 22 3.5 22s-.699 0-.883-.076a1 1 0 0 1-.54-.541C2 21.199 2 20.966 2 20.5v-2.578c0-1.202 0-1.803.172-2.37s.505-1.067 1.172-2.067L4 12.5l.901-1.983c.777-1.708 1.165-2.562 1.907-3.04C7.549 7 8.488 7 10.364 7h2.272c1.877 0 2.815 0 3.556.478c.742.477 1.13 1.331 1.907 3.04L19 12.5l.656.985c.667 1 1 1.5 1.172 2.067S21 16.72 21 17.922"></svg:path><svg:path d="m2 11l2 1.5l1.761.44q.24.06.485.06h10.508q.245 0 .485-.06L19 12.5l2-1.5m-4 5v.01M6 16v.01M19 7a2 2 0 0 0-2-2m5 2a5 5 0 0 0-5-5"></svg:path></svg:g>`,
})
export class HugeiconsCarSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
