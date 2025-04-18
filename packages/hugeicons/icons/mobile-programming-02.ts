import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMobileProgramming02Icon],svg[hugeicons-mobile-programming-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 6c.087-1.42.326-2.323.982-2.975C7.015 2 8.677 2 12 2s4.985 0 6.017 1.025c.657.652.896 1.556.983 2.975m0 12c-.087 1.42-.326 2.323-.983 2.975C16.986 22 15.324 22 12 22s-4.985 0-6.018-1.025C5.326 20.323 5.087 19.419 5 18m6 1h2m4.5-10l1.533 1.586c.645.666.967 1 .967 1.414s-.322.748-.967 1.414L17.5 15m-11-6l-1.533 1.586C4.322 11.252 4 11.586 4 12s.322.748.967 1.414L6.5 15" color="currentColor"></svg:path>`,
})
export class HugeiconsMobileProgramming02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
