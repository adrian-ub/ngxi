import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMaskTheater01Icon],svg[hugeicons-mask-theater-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 5c3.078 0 5.853-.724 7.81-1.884A.8.8 0 0 1 20.223 3c.429 0 .777.348.777.777V10c0 7-4.5 12-9 12s-9-5-9-12V3.777a.777.777 0 0 1 1.19-.661C6.147 4.276 8.922 5 12 5"></svg:path><svg:path d="M6.5 10c.368-.307.904-.5 1.5-.5s1.132.193 1.5.5m2.5 5.7c1.192 0 2.263-.27 3-.7c0 0-.5 3-3 3s-3-3-3-3c.737.43 1.808.7 3 .7m2.5-5.7c.368-.307.904-.5 1.5-.5s1.131.193 1.5.5"></svg:path></svg:g>`,
})
export class HugeiconsMaskTheater01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
