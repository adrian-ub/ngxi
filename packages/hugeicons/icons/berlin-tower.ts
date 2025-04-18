import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBerlinTowerIcon],svg[hugeicons-berlin-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-6.5 3.5C9.5 14.5 8 20 7 22"></svg:path><svg:path d="M14.5 12.5c0 2 1.5 7.5 2.5 9.5M12 5V2M9 16h6"></svg:path></svg:g>`,
})
export class HugeiconsBerlinTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
