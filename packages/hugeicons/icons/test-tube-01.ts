import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTestTube01Icon],svg[hugeicons-test-tube-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.54 2v2.486c0 1.748 0 2.622.215 3.461c.213.84.633 1.61 1.472 3.15l1.136 2.088c2.138 3.926 3.207 5.89 2.33 7.345l-.014.022C18.79 22 16.526 22 12 22s-6.79 0-7.68-1.448l-.013-.022c-.877-1.455.192-3.419 2.33-7.345l1.136-2.088c.84-1.54 1.258-2.31 1.472-3.15s.214-1.713.214-3.46V2M9 16.002L9.009 16M15 18.002l.009-.002M8 2h8"></svg:path><svg:path d="M7.5 11.556c1-1.153 2.6-.322 4.5.762c2.5 1.426 4 .332 4.5-.703"></svg:path></svg:g>`,
})
export class HugeiconsTestTube01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
