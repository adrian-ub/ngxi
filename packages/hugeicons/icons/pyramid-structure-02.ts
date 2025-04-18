import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPyramidStructure02Icon],svg[hugeicons-pyramid-structure-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 7.567C9.67 4.522 10.63 3 12 3s2.33 1.522 4.25 4.567l2.244 3.56c2.742 4.35 4.113 6.525 3.249 8.2C20.878 21 18.383 21 13.394 21h-2.788c-4.99 0-7.484 0-8.349-1.674c-.864-1.674.507-3.849 3.249-8.199zM3 15h18M6.818 9H17" color="currentColor"></svg:path>`,
})
export class HugeiconsPyramidStructure02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
