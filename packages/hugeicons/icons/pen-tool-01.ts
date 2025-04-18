import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPenTool01Icon],svg[hugeicons-pen-tool-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="m6.5 20.5l1.406-5.273c.286-1.07.428-1.606.833-1.917s.958-.31 2.066-.31h2.39c1.108 0 1.662 0 2.066.31c.405.311.547.846.833 1.917L17.5 20.5"></svg:path><svg:path d="m9.5 13l1.577-3.639C11.47 8.454 11.667 8 12 8s.53.454.923 1.361L14.5 13"></svg:path></svg:g>`,
})
export class HugeiconsPenTool01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
