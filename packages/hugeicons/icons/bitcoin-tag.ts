import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinTagIcon],svg[hugeicons-bitcoin-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.5 5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path><svg:path d="M2.774 11.144c-1.003 1.12-1.024 2.81-.104 4a34 34 0 0 0 6.186 6.186c1.19.92 2.88.899 4-.104a92 92 0 0 0 8.516-8.698a1.95 1.95 0 0 0 .47-1.094c.164-1.796.503-6.97-.902-8.374s-6.578-1.066-8.374-.901a1.95 1.95 0 0 0-1.094.47a92 92 0 0 0-8.698 8.515"></svg:path><svg:path d="m7.896 13.448l3.82-3.821m1.12 1.12l.955-.956M8.06 15.522l.955-.955m.791-3.03l2.239 2.24m0 0c.37.37.35.992-.045 1.387l-.478.478c-.395.396-1.017.416-1.388.045l-2.91-2.91m4.82 1c.372.37.993.35 1.389-.046l.478-.477c.395-.396.415-1.017.044-1.388l-2.91-2.91"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
