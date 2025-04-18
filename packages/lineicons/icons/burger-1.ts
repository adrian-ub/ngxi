import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBurger1Icon],svg[lineicons-burger-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 3.75A5.25 5.25 0 0 0 3.25 9v1.484a2.25 2.25 0 0 0 0 4.032V18a2.25 2.25 0 0 0 2.25 2.25h13A2.25 2.25 0 0 0 20.75 18v-3.484a2.25 2.25 0 0 0 0-4.032V9c0-2.9-2.35-5.25-5.25-5.25zm11.25 8a.75.75 0 0 1 0 1.5H4.25a.75.75 0 0 1 0-1.5zm-.5-1.5H4.75V9A3.75 3.75 0 0 1 8.5 5.25h7A3.75 3.75 0 0 1 19.25 9zm-14.5 4.5h14.5V18a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class LineiconsBurger1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
