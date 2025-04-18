import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDisability02Icon],svg[hugeicons-disability-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.5 10l-2-1L7 12m7-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4m1.5 13.483A6.07 6.07 0 0 1 10.57 22c-3.353 0-6.07-2.705-6.07-6.042c0-.875.164-1.707.5-2.458M12.65 8l-.754 1.846c-.766 1.879-1.149 2.818-.713 3.486s1.432.668 3.424.668c.694 0 1.364-.18 1.75.496L19.5 20" color="currentColor"></svg:path>`,
})
export class HugeiconsDisability02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
