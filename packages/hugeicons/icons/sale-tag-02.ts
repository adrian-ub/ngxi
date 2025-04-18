import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSaleTag02Icon],svg[hugeicons-sale-tag-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.5 5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path><svg:path d="M2.774 11.144c-1.003 1.12-1.024 2.81-.104 4a34 34 0 0 0 6.186 6.186c1.19.92 2.88.899 4-.104a92 92 0 0 0 8.516-8.698a1.95 1.95 0 0 0 .47-1.094c.164-1.796.503-6.97-.902-8.374s-6.578-1.066-8.374-.901a1.95 1.95 0 0 0-1.094.47a92 92 0 0 0-8.698 8.515"></svg:path><svg:path d="M13.788 12.367c.022-.402.134-1.135-.476-1.693m0 0a2.3 2.3 0 0 0-.797-.451c-1.257-.443-2.8 1.039-1.708 2.396c.587.73 1.04.954.996 1.782c-.03.582-.602 1.191-1.356 1.423c-.655.202-1.378-.065-1.835-.576c-.559-.624-.502-1.212-.507-1.468m5.208-3.106L14 9.986m-5.34 5.34l-.653.653"></svg:path></svg:g>`,
})
export class HugeiconsSaleTag02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
