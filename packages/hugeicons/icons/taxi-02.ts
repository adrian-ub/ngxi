import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTaxi02Icon],svg[hugeicons-taxi-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 16.922V19.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C19 20.199 19 19.966 19 19.5s0-.699-.076-.883a1 1 0 0 0-.541-.54C18.199 18 17.966 18 17.5 18h-11c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541C5 18.801 5 19.034 5 19.5s0 .699-.076.883a1 1 0 0 1-.541.54C4.199 21 3.966 21 3.5 21s-.699 0-.883-.076a1 1 0 0 1-.54-.541C2 20.199 2 19.966 2 19.5v-2.578c0-1.202 0-1.803.172-2.37s.505-1.067 1.172-2.067L4 11.5l.962-2.308c.745-1.79 1.118-2.684 1.874-3.188S8.56 5.5 10.5 5.5h3c1.939 0 2.908 0 3.664.504s1.129 1.399 1.874 3.188L20 11.5l.656.985c.667 1 1 1.5 1.172 2.067S22 15.72 22 16.922"></svg:path><svg:path d="m2 10l2 1.5l2 .5h12l2-.5l2-1.5m-4 5v.01M6 15v.01m9-9.51V5c0-.943 0-1.414-.293-1.707S13.943 3 13 3h-2c-.943 0-1.414 0-1.707.293S9 4.057 9 5v.5"></svg:path></svg:g>`,
})
export class HugeiconsTaxi02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
