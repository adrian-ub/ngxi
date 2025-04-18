import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintHashIcon],svg[pepicons-print-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:g opacity=".2"><svg:path d="M4 8.75a1.5 1.5 0 0 1 1.5-1.5h11a1.5 1.5 0 0 1 0 3h-11A1.5 1.5 0 0 1 4 8.75m0 5.5a1.5 1.5 0 0 1 1.5-1.5h11a1.5 1.5 0 0 1 0 3h-11a1.5 1.5 0 0 1-1.5-1.5"></svg:path><svg:path d="M8.875 3.505a1.5 1.5 0 0 1 1.37 1.62l-1 12a1.5 1.5 0 1 1-2.99-.25l1-12a1.5 1.5 0 0 1 1.62-1.37m5.5 0a1.5 1.5 0 0 1 1.37 1.62l-1 12a1.5 1.5 0 1 1-2.99-.25l1-12a1.5 1.5 0 0 1 1.62-1.37"></svg:path></svg:g><svg:path d="M3 7.75a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M7.791 3.502a.5.5 0 0 1 .457.54l-1 12a.5.5 0 0 1-.996-.084l1-12a.5.5 0 0 1 .54-.456m5.5 0a.5.5 0 0 1 .456.54l-1 12a.5.5 0 0 1-.996-.084l1-12a.5.5 0 0 1 .54-.456"></svg:path></svg:g>`,
})
export class PepiconsPrintHashIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
