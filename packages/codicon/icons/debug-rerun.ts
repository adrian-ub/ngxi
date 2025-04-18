import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDebugRerunIcon],svg[codicon-debug-rerun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.167 12a3 3 0 0 1-5.74 1.223l-.928.376A4.001 4.001 0 1 0 1 9.556V8.333H0V11l.5.5h2.333v-1H1.568A3 3 0 0 1 7.167 12"></svg:path><svg:path d="M5 2.41L5.78 2l9 6v.83L10 12.017v-1.2l3.6-2.397L6 3.35V7H5z"></svg:path></svg:g>`,
})
export class CodiconDebugRerunIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
