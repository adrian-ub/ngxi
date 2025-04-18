import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNavigation02Icon],svg[hugeicons-navigation-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 11.95c-.03 1.035 4.032 3.47 4.414 2.987c.74-1.04.806-4.83.046-5.872C6.104 8.58 2.03 10.939 2 11.95M11.95 22c1.035.03 3.47-4.032 2.987-4.414c-1.04-.74-4.83-.805-5.872-.046c-.485.356 1.874 4.43 2.885 4.46M22 11.95c.03 1.035-4.032 3.47-4.414 2.987c-.74-1.04-.805-4.83-.046-5.872c.356-.485 4.43 1.874 4.46 2.885M11.95 2c1.035-.03 3.47 4.032 2.987 4.414c-1.04.74-4.83.806-5.872.046C8.58 6.104 10.939 2.03 11.95 2"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle></svg:g>`,
})
export class HugeiconsNavigation02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
