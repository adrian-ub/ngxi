import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStickyNote01Icon],svg[hugeicons-sticky-note-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10.612 5l-.527 2M12.3 2.763a1.54 1.54 0 0 1-.55 2.084a1.486 1.486 0 0 1-2.048-.558a1.54 1.54 0 0 1 .55-2.084a1.486 1.486 0 0 1 2.048.558m.7 19.235C12.031 20.818 10.5 18 8.5 18c-1.29.106-1.964 1.361-2.652 2.329m0 0c-.396-.368-.545-.916-.844-2.013L3.26 11.907c-.702-2.579-1.053-3.868-.457-4.884S4.708 5.66 7.328 4.97L9.5 4.397M5.848 20.33c.397.367.962.481 2.091.709l4.142.834c.883.178.891.178 1.762-.052l2.83-.746c2.619-.691 3.928-1.037 4.524-2.053c.596-1.015.245-2.305-.457-4.884l-1.737-6.383c-.702-2.58-1.053-3.869-2.085-4.455c-.898-.511-2.008-.315-4.011.201" color="currentColor"></svg:path>`,
})
export class HugeiconsStickyNote01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
