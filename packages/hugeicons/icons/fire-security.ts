import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFireSecurityIcon],svg[hugeicons-fire-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.945 22C6.557 22 3 18.418 3 14c0-2.084.958-4.168 2.21-6c.256 1.5 1.365 4.4 3.749 4c-2.624-5.5 1.986-10 1.986-10s.497 3.5 4.966 7q.62.486 1.089 1m-1.465 6.202c0-.695-.107-1.656.3-2.282c.903-1.38 2.766-1.14 3.427.18c.301.661.19 1.438.205 2.093m-3.932.009c-.849.088-1.215.64-1.358 1.08c-.144.541-.265 1.862-.072 3.303c.168.9.802 1.319 1.367 1.369c.541.048 2.826.036 3.487.036c1.025 0 1.626-.264 1.927-1.345c.144-.84.18-2.402-.06-3.362c-.266-.802-.902-1.035-1.36-1.09m-3.93.009c1.28-.133 2.649-.164 3.93-.01" color="currentColor"></svg:path>`,
})
export class HugeiconsFireSecurityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
