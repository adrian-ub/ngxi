import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKettle01Icon],svg[hugeicons-kettle-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m7 7l-2.162.493c-1.504.343-2.257.515-2.626 1.156s-.208 1.497.113 3.208l.446 2.374C3.195 16.485 4.344 17.243 6 18M7.14 7.781l-1.028 10.8c-.152 1.6-.228 2.4.307 2.91C6.955 22 7.872 22 9.706 22h6.588c1.834 0 2.75 0 3.287-.51c.535-.51.46-1.309.307-2.908l-1.029-10.8C18.541 4.441 16.08 3 13 3S7.459 4.442 7.14 7.781"></svg:path><svg:path d="M8 7h12.978c.86 0 1.158.229.966 1.24c-.323 1.713-1.302 3.111-2.588 3.76M12 17c0-3 2-2 2-5m-1-9V2"></svg:path></svg:g>`,
})
export class HugeiconsKettle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
