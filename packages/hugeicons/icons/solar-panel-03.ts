import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSolarPanel03Icon],svg[hugeicons-solar-panel-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 9a3 3 0 1 1 6 0m.307 3H8.693c-1.318 0-1.976 0-2.487.344c-.51.344-.755.953-1.244 2.17l-.804 2c-.998 2.486-1.498 3.729-.9 4.607S5.2 22 7.889 22h8.222c2.689 0 4.033 0 4.631-.879c.598-.878.098-2.121-.9-4.607l-.804-2c-.49-1.217-.734-1.826-1.244-2.17S16.624 12 15.307 12M12 12v10m8-5H4m8-14V2m6 7h1M5 9h1m10.242-4.243l.707-.707m-9.899 0l.707.707" color="currentColor"></svg:path>`,
})
export class HugeiconsSolarPanel03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
