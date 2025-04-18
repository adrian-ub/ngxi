import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMedicineChestIcon],svg[icon-park-medicine-chest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="26" x="5" y="16" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:path fill="#000" d="M19 8H29V4H19V8ZM30 9V16H34V9H30ZM18 16V9H14V16H18ZM29 8C29.5523 8 30 8.44772 30 9H34C34 6.23858 31.7614 4 29 4V8ZM19 4C16.2386 4 14 6.23858 14 9H18C18 8.44772 18.4477 8 19 8V4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 29L30 29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 23V35"></svg:path></svg:g>`,
})
export class IconParkMedicineChestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
