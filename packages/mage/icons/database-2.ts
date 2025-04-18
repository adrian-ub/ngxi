import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDatabase2Icon],svg[mage-database-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.938 14.315v3.467a2.31 2.31 0 0 1-1.157 1.987A11.14 11.14 0 0 1 12 21.248a11.14 11.14 0 0 1-5.781-1.49a2.31 2.31 0 0 1-1.157-1.976v-3.467A10.13 10.13 0 0 0 12 16.626c2.52.12 4.994-.704 6.938-2.31m0-.001V9.694A10.13 10.13 0 0 1 12 12.004c-2.52.12-4.994-.704-6.937-2.31v4.621m13.875-9.243A10.13 10.13 0 0 0 12 2.762c-2.52-.12-4.994.704-6.937 2.31"></svg:path><svg:path d="M18.938 9.69V5.067A10.13 10.13 0 0 1 12 7.378c-2.52.12-4.994-.704-6.937-2.31v4.621"></svg:path></svg:g>`,
})
export class MageDatabase2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
