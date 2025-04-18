import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinDown02Icon],svg[hugeicons-bitcoin-down-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 9a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13m9-.5l-4.588-4.206c-.668-.612-1.002-.918-1.404-.91c-.401.01-.721.33-1.362.97l-.966.966c-.564.564-.846.846-1.207.879c-.361.032-.69-.195-1.345-.65L4 2m16 6.5h-3.5m3.5 0v-3"></svg:path><svg:path d="M9.438 18.167v-5.334m1.562 0V11.5m0 8v-1.333M9.438 15.5h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H8.5m4.063-2.667c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H8.5"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinDown02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
