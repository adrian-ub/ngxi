import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNewsoutIcon],svg[arcticons-newsout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.459 41.03l39-17.03l-39-17.03m37.927 29.277a3.5 3.5 0 0 0 0-.978l1.059-.829a.245.245 0 0 0 .06-.32l-1.001-1.738a.245.245 0 0 0-.306-.108l-1.25.504a3.8 3.8 0 0 0-.845-.489l-.189-1.327a.245.245 0 0 0-.244-.21h-2.01a.245.245 0 0 0-.244.21l-.189 1.327a3.8 3.8 0 0 0-.846.49l-1.254-.505a.245.245 0 0 0-.305.108l-1.003 1.738a.245.245 0 0 0 .061.32l1.057.829a4 4 0 0 0-.034.489a4 4 0 0 0 .034.489l-1.056.828a.245.245 0 0 0-.062.32l1.003 1.739a.244.244 0 0 0 .305.107l1.25-.503a3.8 3.8 0 0 0 .846.489l.188 1.327a.245.245 0 0 0 .244.21h2.005a.245.245 0 0 0 .245-.21l.188-1.327a3.8 3.8 0 0 0 .846-.49l1.249.504a.244.244 0 0 0 .306-.107l1.002-1.738a.245.245 0 0 0-.061-.32Z"></svg:path>`,
})
export class ArcticonsNewsoutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
