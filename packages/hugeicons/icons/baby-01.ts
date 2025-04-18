import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBaby01Icon],svg[hugeicons-baby-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M14 16c-.573.632-1.26 1-2 1s-1.427-.368-2-1m-1-4.5c-.286-.316-.63-.5-1-.5s-.714.184-1 .5m10 0c-.286-.316-.63-.5-1-.5s-.714.184-1 .5M12 2a3 3 0 1 0 2 5.236"></svg:path></svg:g>`,
})
export class HugeiconsBaby01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
