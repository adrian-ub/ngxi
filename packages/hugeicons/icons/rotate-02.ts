import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotate02Icon],svg[hugeicons-rotate-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 2v3.132a.314.314 0 0 1-.555.201A9.97 9.97 0 0 0 11.995 2C6.475 2 2 6.477 2 12c0 3.958 2.299 7.38 5.633 9m4.632 1q-.7 0-1.376-.092M21.734 8.667q.169.596.266 1.202m-.035 3.669q-.105.6-.274 1.186m-1.524 3.272q-.358.531-.774 1.019M16.57 21.36q-.531.304-1.104.547" color="currentColor"></svg:path>`,
})
export class HugeiconsRotate02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
