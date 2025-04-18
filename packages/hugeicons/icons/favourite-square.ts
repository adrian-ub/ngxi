import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFavouriteSquareIcon],svg[hugeicons-favourite-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.769 7.997c1.34-.822 2.51-.49 3.214.037c.288.216.432.325.517.325s.229-.109.517-.325c.703-.528 1.874-.86 3.214-.037c1.76 1.08 2.158 4.64-1.9 7.645c-.774.572-1.16.858-1.831.858c-.67 0-1.057-.286-1.83-.858c-4.06-3.005-3.661-6.566-1.901-7.645"></svg:path><svg:path d="M2 12c0-4.478 0-6.718 1.391-8.109S7.021 2.5 11.5 2.5c4.478 0 6.718 0 8.109 1.391S21 7.521 21 12c0 4.478 0 6.718-1.391 8.109S15.979 21.5 11.5 21.5c-4.478 0-6.718 0-8.109-1.391S2 16.479 2 12"></svg:path></svg:g>`,
})
export class HugeiconsFavouriteSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
