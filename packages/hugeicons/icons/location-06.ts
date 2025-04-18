import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLocation06Icon],svg[hugeicons-location-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.5 11a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path d="M12 2c4.87 0 9 4.033 9 8.926c0 4.97-4.197 8.459-8.073 10.83a1.89 1.89 0 0 1-1.854 0C7.203 19.363 3 15.915 3 10.927C3 6.033 7.13 2 12 2"></svg:path></svg:g>`,
})
export class HugeiconsLocation06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
