import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFastWindIcon],svg[hugeicons-fast-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 5.941c3.5 3.432 8.576 1.961 9.732 0c.17-.288.268-.623.268-.98C12 3.878 11.105 3 10 3s-2 .878-2 1.961m9 3.967C17 7.311 18.12 6 19.5 6S22 7.311 22 8.928a3.23 3.23 0 0 1-.585 1.883C19.346 14.191 9.276 12.916 4 11.856m9.085 8.031c.206.649.762 1.113 1.415 1.113c.828 0 1.5-.747 1.5-1.669c0-.313-.078-.607-.213-.857C14.5 15.992 8 14.324 2 18.774M19 15.5h2" color="currentColor"></svg:path>`,
})
export class HugeiconsFastWindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
