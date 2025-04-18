import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFavouriteCircleIcon],svg[hugeicons-favourite-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.269 8.497c1.34-.822 2.51-.49 3.214.037c.288.216.432.325.517.325s.229-.109.517-.325c.703-.528 1.874-.86 3.214-.037c1.76 1.08 2.158 4.64-1.9 7.645c-.774.572-1.16.858-1.831.858c-.67 0-1.057-.286-1.83-.858c-4.06-3.005-3.661-6.566-1.901-7.645"></svg:path><svg:path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path></svg:g>`,
})
export class HugeiconsFavouriteCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
