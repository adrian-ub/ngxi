import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoveRightIcon],svg[hugeicons-move-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="5" cy="12" r="3"></svg:circle><svg:path d="M22 12H12m10 0c0 .562-.438.99-1.314 1.844L19.029 15.5M22 12c0-.562-.438-.99-1.314-1.844L19.03 8.5"></svg:path></svg:g>`,
})
export class HugeiconsMoveRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
