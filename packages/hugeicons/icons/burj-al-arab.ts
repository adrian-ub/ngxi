import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBurjAlArabIcon],svg[hugeicons-burj-al-arab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 22h18M7 22V2m0 2c5.675.961 10 5.943 10 11.944c0 2.206-.584 4.274-1.605 6.056M5 9h12M7 13h4m-4 4h4" color="currentColor"></svg:path>`,
})
export class HugeiconsBurjAlArabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
