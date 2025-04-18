import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPieChart08Icon],svg[hugeicons-pie-chart-08-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 23.572c-5.93 0-10.75-4.82-10.75-10.75S6.07 2.072 12 2.072s10.75 4.82 10.75 10.75c0 1.93-.51 3.743-1.404 5.31a1 1 0 0 1-.073.126A10.75 10.75 0 0 1 12 23.572m-.75-19.97c-4.75.383-8.5 4.373-8.5 9.22a9.2 9.2 0 0 0 .89 3.957l3.047-1.759a5.7 5.7 0 0 1-.437-2.198a5.76 5.76 0 0 1 5-5.701zm1.5 3.519V3.602c4.75.383 8.5 4.373 8.5 9.22c0 1.418-.32 2.763-.894 3.965l-3.046-1.759c.283-.68.44-1.425.44-2.206a5.76 5.76 0 0 0-5-5.701M12 8.572a4.26 4.26 0 0 0-4.25 4.25a4.26 4.26 0 0 0 4.25 4.25a4.26 4.26 0 0 0 4.25-4.25A4.26 4.26 0 0 0 12 8.572m0 13.5a9.25 9.25 0 0 0 7.608-3.994l-3.047-1.759a5.744 5.744 0 0 1-9.128-.007l-3.046 1.759A9.25 9.25 0 0 0 12 22.072" color="currentColor"></svg:path>`,
})
export class HugeiconsPieChart08Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
