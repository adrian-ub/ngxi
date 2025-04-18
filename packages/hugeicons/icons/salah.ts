import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSalahIcon],svg[hugeicons-salah-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 18c-.287-.76-.544-1.863-1.5-2.5c-1.5-1-3-1.5-3-3S12.5 8 12.5 8l.695-.732C14.894 8.025 16.5 5.881 16.5 4.5a2.5 2.5 0 0 0-5 0c0 1-.8 1.6-2 2C8 7 6 8 6 13c0 4 1.833 5.333 2.5 6c-3.2 0-4 2-4 3h13a2 2 0 1 0 0-4m0 0c-7.728 0-8.44-4.667-8-7" color="currentColor"></svg:path>`,
})
export class HugeiconsSalahIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
