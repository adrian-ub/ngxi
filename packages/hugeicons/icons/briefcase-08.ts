import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBriefcase08Icon],svg[hugeicons-briefcase-08-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 10v7.986c0 1.94 1.79 3.514 4 3.514h10c2.21 0 4-1.573 4-3.514V10"></svg:path><svg:path d="M19.057 3.5c.505 0 .757 0 .966.05c.711.171 1.267.756 1.43 1.505c.047.22.047.485.047 1.016c0 1.328 0 1.992-.12 2.542c-.405 1.872-1.794 3.334-3.573 3.762c-.522.125-1.153.125-2.414.125H8.607c-1.261 0-1.892 0-2.414-.125c-1.779-.428-3.168-1.89-3.574-3.762C2.5 8.063 2.5 7.399 2.5 6.07c0-.53 0-.796.048-1.016c.162-.749.718-1.334 1.43-1.505c.208-.05.46-.05.965-.05m4.207 0h5.7"></svg:path><svg:path d="M5 4c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541C9 3.301 9 3.534 9 4s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C5 4.699 5 4.466 5 4m10 0c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541C19 3.301 19 3.534 19 4s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C15 4.699 15 4.466 15 4M7 18h3"></svg:path></svg:g>`,
})
export class HugeiconsBriefcase08Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
