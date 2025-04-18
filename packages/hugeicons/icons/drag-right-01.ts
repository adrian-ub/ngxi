import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragRight01Icon],svg[hugeicons-drag-right-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.668 8.488a3.49 3.49 0 0 1-1.702-2.994A3.5 3.5 0 0 1 10.477 2a3.5 3.5 0 0 1 3.51 3.493a3.49 3.49 0 0 1-1.7 2.994m5.726-5.497l1.747 1.441c.255.272.298.477.172.778a.8.8 0 0 1-.212.28L18.013 7m-3.598-2.024h4.416"></svg:path><svg:path d="m8.56 21.933l.026-.63a2.92 2.92 0 0 0-.481-1.742c-1.352-2.025-2.385-3.178-3.801-5.153a1.5 1.5 0 0 1-.262-.51c-.341-1.442 1.423-3.32 3.057-1.157l1.596 1.63V6.34c.211-1.646 2.81-1.972 3.249 0v3.738c1.621-.147 8.175.977 6.938 5.46l-.17.634c-.209.766-.718 1.884-1.21 2.837c-.545 1.06-.401 2.557-.493 2.991"></svg:path></svg:g>`,
})
export class HugeiconsDragRight01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
