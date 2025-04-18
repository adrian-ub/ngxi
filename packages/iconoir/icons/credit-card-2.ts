import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCreditCard2Icon],svg[iconoir-credit-card-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="1.5"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 9V5.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6V9Zm0 0h14"></svg:path><svg:rect width="4" height="4" x="15" y="12" fill="currentColor" rx=".6"></svg:rect></svg:g>`,
})
export class IconoirCreditCard2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
