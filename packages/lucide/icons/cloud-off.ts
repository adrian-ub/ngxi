import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCloudOffIcon],svg[lucide-cloud-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2 2l20 20M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193m2.725-2.307A4.5 4.5 0 0 0 17.5 10h-1.79A7.01 7.01 0 0 0 10 5.07"></svg:path>`,
})
export class LucideCloudOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
