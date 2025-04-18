import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHandBeaterIcon],svg[hugeicons-hand-beater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.417 21.826l-4.243-4.24a.6.6 0 0 1 .075-.913a3.6 3.6 0 0 1 4.641.384l.056.055a3.6 3.6 0 0 1 .384 4.639a.6.6 0 0 1-.913.075M7 17.002l4.002-4m3.496-3.5h.009m-.644-3.822c3.429-1.75 3.262-3 4.2-3.664c.293-.127 1.209.452 2.114 1.274c1.026.932 1.993 2.213 1.8 2.706c-.623.696-1.89.987-3.272 3.532c-1.769 2.965-4.23 3.864-5.645 4.38l-.036.014c-.313.114-.669.08-.924-.134c-.427-.359-.756-.741-1.048-1.024c-1.058-.964-1.058-1.234-1.058-1.489c.061-1.029 2.123-4.526 3.87-5.595" color="currentColor"></svg:path>`,
})
export class HugeiconsHandBeaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
