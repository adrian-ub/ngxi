import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCoffeeIcon],svg[ci-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h6.943m0 0h.114m-.114 0h.114m-.114 0A7 7 0 0 1 4 13V8.923c0-.51.413-.923.923-.923h12.154c.51 0 .923.413.923.923V9m-6.943 11H18m-6.943 0A7 7 0 0 0 18 13m0-4h1.5a2.5 2.5 0 0 1 0 5H18v-1m0-4v4M15 3l-1 2m-2-2l-1 2M9 3L8 5"></svg:path>`,
})
export class CiCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
