import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChimney2Icon],svg[tdesign-chimney-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2H4v5.924L1.834 22H22V10H11.32L11 7.924zM9 4v4.076L9.296 10H8v10H4.165L6 8.076V4zm1 16v-8h10v8h-4v-4h-2v4z"></svg:path>`,
})
export class TdesignChimney2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
