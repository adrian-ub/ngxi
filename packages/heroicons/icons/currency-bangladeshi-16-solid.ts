import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsCurrencyBangladeshi16SolidIcon],svg[heroicons-currency-bangladeshi-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M5.25 4.707a.75.75 0 0 1-.78-1.237c.841-.842 2.28-.246 2.28.944V6h5.5a.75.75 0 0 1 0 1.5h-5.5v3.098c0 .549.295.836.545.87q.222.032.455.032c.92 0 1.752-.382 2.343-.998H9.75a.75.75 0 0 1 0-1.5h1.708a.75.75 0 0 1 .695 1.032a4.75 4.75 0 0 1-5.066 2.92c-1.266-.177-1.837-1.376-1.837-2.356V7.5h-1.5a.75.75 0 0 1 0-1.5h1.5z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsCurrencyBangladeshi16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
