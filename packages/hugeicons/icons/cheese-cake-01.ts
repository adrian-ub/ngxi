import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCheeseCake01Icon],svg[hugeicons-cheese-cake-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.538 17h7.512m7.513 0h2.504M12.535 5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m0 0c.167-.5.9-1.6 2.5-2"></svg:path><svg:path d="M10.02 8.015c-5.949 2.249-8.348 3.287-7.984 4.031c1.979.935 5.615.695 9.335.555c1.024-.038 2.034.47 2.266 1.477c.164.711.208 1.332.531 1.726c.185.226.5.302.782.229c.76-.2 1.075-1.049 1.45-2.54c.073-.29.177-.603.459-.7c1.26-.438 5.139.526 5.139-1.25c-.063-1.85-.736-3.003-2.899-4.718a3.5 3.5 0 0 0-2.456-.754c-.926.074-1.357.195-1.632.432"></svg:path><svg:path d="m2.013 11.993l.975 4.305c.5 2.254.75 3.381 1.572 4.042c.823.66 1.977.66 4.285.66h8.578c1.722 0 2.583 0 3.155-.518s.656-1.375.825-3.09l.59-5.758"></svg:path></svg:g>`,
})
export class HugeiconsCheeseCake01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
