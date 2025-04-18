import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPreviousStep2Icon],svg[lineicons-previous-step-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.914 4.5a.75.75 0 0 1 1.5 0v5.338l8.153-5.565c1.494-1.019 3.518.05 3.518 1.859v11.736c0 1.808-2.024 2.878-3.518 1.858l-8.153-5.564V19.5a.75.75 0 1 1-1.5 0zm1.901 8.12l8.598 5.868a.75.75 0 0 0 1.172-.62V6.132a.75.75 0 0 0-1.172-.62l-8.598 5.869a.75.75 0 0 0 0 1.238"></svg:path>`,
})
export class LineiconsPreviousStep2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
