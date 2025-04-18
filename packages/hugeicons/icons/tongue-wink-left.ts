import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTongueWinkLeftIcon],svg[hugeicons-tongue-wink-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M9 8s1 1 1 2c-.75-1-2.25-1-3 0m9.009-1H16m-8 5a5 5 0 0 0 4 2a5 5 0 0 0 4-2m-6 2v1.5a2 2 0 1 0 4 0V16"></svg:path></svg:g>`,
})
export class HugeiconsTongueWinkLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
