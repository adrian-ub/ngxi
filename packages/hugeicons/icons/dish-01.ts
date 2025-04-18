import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDish01Icon],svg[hugeicons-dish-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 17h20M12 7s1.5-1.034 1.5-2.309c0-2.255-3-2.255-3 0C10.5 5.966 12 7 12 7M3 17l.621 2.485A2 2 0 0 0 5.561 21h12.877a2 2 0 0 0 1.94-1.515L21 17m-.5-2.5C20.002 10.277 16.386 7 12 7s-8.002 3.277-8.5 7.5" color="currentColor"></svg:path>`,
})
export class HugeiconsDish01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
