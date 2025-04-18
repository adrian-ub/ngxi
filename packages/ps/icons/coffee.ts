import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psCoffeeIcon],svg[ps-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M301 21H45q-17 0-29.5 13T3 64v149q0 63 43.5 106.5T152 363h43q55 0 97-37t50-91h2q35 0 60-25.5t25-60.5t-25-60t-60-25q0-17-12.5-30T301 21m0 192q0 45-31 76t-75 31h-43q-45 0-76-31t-31-76V64h256zm86-64q0 18-13 30.5T344 192v-85q17 0 30 12.5t13 29.5"></svg:path>`,
})
export class PsCoffeeIcon {
  readonly viewBox = input("0 0 432 448")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
