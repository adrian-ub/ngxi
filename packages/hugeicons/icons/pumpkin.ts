import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPumpkinIcon],svg[hugeicons-pumpkin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 18c0 2-2 4-4 4s-4-2-4-4m7-10c-.599-1.196-1.718-2-3-2s-2.401.804-3 2"></svg:path><svg:path d="M15.412 19.408C19.647 21.802 22 16.406 22 12.704S19.775 6 17.031 6c-.936 0-2.09.479-3.031 1.437M8.588 19.408C4.353 21.802 2 16.406 2 12.704S4.225 6 6.969 6c.936 0 2.09.479 3.031 1.437M12 6c0-1.333.6-4 3-4"></svg:path></svg:g>`,
})
export class HugeiconsPumpkinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
