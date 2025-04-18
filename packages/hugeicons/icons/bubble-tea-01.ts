import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBubbleTea01Icon],svg[hugeicons-bubble-tea-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 9l-1.478 9.414c-.25 1.585-.374 2.378-.936 2.85c-1.2 1.009-6.039.953-7.172 0c-.562-.472-.687-1.265-.936-2.85L6 9m0 0l.514-1.286a5.908 5.908 0 0 1 10.972 0L18 9M5 9h14m-6 0l3-7m-5.991 14.5H10m4 1.5h-.009m-.98-4h-.009" color="currentColor"></svg:path>`,
})
export class HugeiconsBubbleTea01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
