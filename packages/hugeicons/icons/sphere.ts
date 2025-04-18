import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSphereIcon],svg[hugeicons-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 10.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 0V2"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M15 8c4.057.522 7 2.073 7 3.906C22 14.167 17.523 16 12 16S2 14.167 2 11.906C2 10.073 4.943 8.522 9 8"></svg:path></svg:g>`,
})
export class HugeiconsSphereIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
