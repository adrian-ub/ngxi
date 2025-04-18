import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEyeStroke12Icon],svg[garden-eye-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="6" cy="6" r="1.5"></svg:circle><svg:path stroke-linejoin="round" d="M11.38 6.37c.16-.22.16-.52 0-.75c-.63-.9-2.5-3.12-5.38-3.12S1.25 4.72.62 5.63c-.16.22-.16.52 0 .75c.63.9 2.5 3.12 5.38 3.12s4.75-2.22 5.38-3.13z"></svg:path></svg:g>`,
})
export class GardenEyeStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
