import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHandPointingDown01Icon],svg[hugeicons-hand-pointing-down-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.834 2.001v.948a3 3 0 0 1-.595 1.792L4.58 9.643c-.422.566-.759 1.267-.48 1.915c.45 1.049 1.723 1.73 3.28.158l1.598-1.71V20.43c.056 2.044 3.345 2.145 3.486 0v-5.94c1.48.191 8.454-.852 7.437-5.272l-.144-.634c-.205-.918-.813-2.556-1.484-3.513c-.698-.997-.451-2.626-.451-3.07" color="currentColor"></svg:path>`,
})
export class HugeiconsHandPointingDown01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
