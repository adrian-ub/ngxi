import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoneyNotFound03Icon],svg[hugeicons-money-not-found-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.768 13.768a2.5 2.5 0 0 1-3.536-3.536m8.768.91a14 14 0 0 0-1-.107m-12 1.93q-.512-.036-1-.107"></svg:path><svg:path d="M18 18.548h-1.454c-1.86 0-3.557.369-4.849.976s-2.99.976-4.849.976c-1.033 0-2.017-.114-2.909-.32c-.573-.132-.86-.198-1.203-.471a2.3 2.3 0 0 1-.548-.692C2 18.619 2 18.233 2 17.46V6.947c0-.96 1.009-1.621 1.94-1.406c.435.1.979.265 1.454.319M22 17.5V6.614c0-1.494-.418-2.424-2-2.787c-.92-.21-1.934-.327-3-.327c-1.917 0-3.667.378-5 1c-.72.336-1.576.828-2.5 1M2 2l20 20"></svg:path></svg:g>`,
})
export class HugeiconsMoneyNotFound03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
