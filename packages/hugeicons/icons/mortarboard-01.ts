import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMortarboard01Icon],svg[hugeicons-mortarboard-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M1.998 8c0 1.341 8.096 5 9.988 5s9.987-3.659 9.987-5c0-1.343-8.096-5.001-9.987-5.001s-9.988 3.658-9.988 5"></svg:path><svg:path d="m5.992 11l1.251 5.8c.086.398.284.769.614 1.005c2.222 1.595 6.034 1.595 8.256 0c.33-.236.527-.607.613-1.005l1.251-5.8m2.5-1.5v7m0 0c-.79 1.447-1.14 2.222-1.496 3.501c-.077.455-.016.684.298.888c.127.083.28.112.431.112h1.519a.8.8 0 0 0 .457-.125c.291-.201.366-.422.287-.875c-.311-1.187-.708-2-1.496-3.5"></svg:path></svg:g>`,
})
export class HugeiconsMortarboard01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
