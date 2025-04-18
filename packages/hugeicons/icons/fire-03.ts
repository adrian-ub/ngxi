import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFire03Icon],svg[hugeicons-fire-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 13.499c0 4.82 3.92 8.75 8.75 8.75s8.75-3.93 8.75-8.75c0-3.29-1.78-7.38-4.23-9.71a.82.82 0 0 0-.58-.2a.76.76 0 0 0-.54.3l-1.41 1.88l-2.9-3.73a.754.754 0 0 0-1.03-.15c-3.38 2.42-6.81 7.18-6.81 11.61m1.5 0c0-3.22 2.37-7.39 5.61-9.96h.01l3.05 3.92c.14.18.36.29.59.29s.45-.11.59-.3l1.47-1.96c1.85 2.11 3.18 5.4 3.18 8.01c0 4-3.25 7.25-7.25 7.25s-7.25-3.25-7.25-7.25m2.5.5c0 2.9 2.13 5.25 4.75 5.25h.01c2.62 0 4.75-2.35 4.75-5.25c0-.88-.2-1.75-.58-2.51a.74.74 0 0 0-.52-.4a.74.74 0 0 0-.64.16l-1.39 1.17l-2.53-3.37a.747.747 0 0 0-1.13-.08c-.81.81-2.72 2.72-2.72 5.03m1.5 0c0-1.22.78-2.35 1.68-3.34v-.01l2.47 3.29c.12.17.31.28.51.3c.21.02.41-.04.57-.17l1.17-.98c.07.3.1.6.1.91c0 2.07-1.46 3.75-3.25 3.75s-3.25-1.68-3.25-3.75" color="currentColor"></svg:path>`,
})
export class HugeiconsFire03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
