import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFryIcon],svg[hugeicons-fry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 9.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0"></svg:path><svg:path d="M19 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-3.992 0h-.01M2 22l7-7"></svg:path></svg:g>`,
})
export class HugeiconsFryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
