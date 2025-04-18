import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBus03Icon],svg[hugeicons-bus-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.004 10V5m5 5V5m5 5V5.5M5.016 17c-1.42 0-2.13 0-2.571-.44c-.441-.439-.441-1.146-.441-2.56V8c0-1.414 0-2.121.441-2.56S3.596 5 5.016 5h7.085c3.473 0 5.21 0 6.54.706c.978.52 1.794 1.3 2.356 2.252c.764 1.293.836 3.021.98 6.478c.04.932.06 1.398-.123 1.75c-.134.26-.34.474-.595.618c-.346.196-.814.196-1.75.196h-.505m-10 0h6"></svg:path><svg:path d="M7.004 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4M1.996 10.001h13.368c.627 0 .84.367 1.32.943c.552.54.925.919 1.44.996c.72.108 3.384.054 3.384.054"></svg:path></svg:g>`,
})
export class HugeiconsBus03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
