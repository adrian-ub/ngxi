import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLocationSelectedIcon],svg[mynaui-location-selected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.435 16.86a.75.75 0 0 1-.87 0C7.809 14.183 3.822 8.677 7.852 4.698A5.9 5.9 0 0 1 12 3c1.556 0 3.048.61 4.148 1.697c4.03 3.979.043 9.485-3.713 12.164"></svg:path><svg:path d="m6.5 17l-2 4h15l-2-4M12 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class MynauiLocationSelectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
