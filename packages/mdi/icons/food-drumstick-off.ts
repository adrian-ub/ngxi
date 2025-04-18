import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFoodDrumstickOffIcon],svg[mdi-food-drumstick-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 22.7l-7.2-7.2c-.3.2-.6.4-.9.7c-1.1 1.1-2.9 1.1-4 0l-1-1c-1.1-1.1-1.1-2.9.1-4c.2-.2.4-.5.6-.8L1.1 3l1.3-1.3l19.7 19.7zM8.1 16.9l-1-1c-.2-.2-.3-.4-.5-.6l-2.5 2.4c-.6-.3-1.2-.2-1.7.3c-.6.6-.6 1.5 0 2.1c.3.3.6.4 1 .4c0 .4.2.7.4 1c.6.6 1.5.6 2.1 0c.5-.5.6-1.1.3-1.7l2.5-2.4c-.2-.1-.4-.3-.6-.5m12.1-4.2C23 9.9 22.6 5.2 19.1 3c-2-1.3-4.7-1.3-6.7 0c-1.4.9-2.3 2.1-2.7 3.5l7.8 7.8c1-.3 1.9-.8 2.7-1.6"></svg:path>`,
})
export class MdiFoodDrumstickOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
