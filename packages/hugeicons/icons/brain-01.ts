import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBrain01Icon],svg[hugeicons-brain-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.145 5.208a3.5 3.5 0 0 0-5.92 1.053A3 3 0 0 0 5 9.051m10.145-3.843a4.5 4.5 0 0 1 5.492 6.065m-5.492-6.065A4.51 4.51 0 0 0 12.028 9M9.05 14a2.5 2.5 0 0 0 2.45 2c.255 0 .382 0 .5.014a2 2 0 0 1 1.435.887c.065.099.122.213.236.44L15 20m-5.95-6a2.5 2.5 0 0 1 .95-2.5M9.05 14H4.5A2.5 2.5 0 1 1 5 9.05m15.637 2.223A2.5 2.5 0 0 0 17.05 13m3.587-1.727A2.5 2.5 0 0 1 19.5 16a1.733 1.733 0 0 0-1.622 2.34L18.5 20M5 9.05c.013.749.3 1.43.764 1.95" color="currentColor"></svg:path>`,
})
export class HugeiconsBrain01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
