import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinDatabaseIcon],svg[hugeicons-bitcoin-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="12" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M12 15c-4.418 0-8-1.343-8-3m11.938 8.667v-5.334m1.562 0V14m0 8v-1.333M15.938 18h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H15M19.063 18c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H15"></svg:path><svg:path d="M20 12V5m-8 17c-4.418 0-8-1.343-8-3V5"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
