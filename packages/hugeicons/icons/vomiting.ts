import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVomitingIcon],svg[hugeicons-vomiting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.4 18.5A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.96 9.96 0 0 1-2.4 6.5"></svg:path><svg:path d="M7.5 8c.476.317 1.341.71 1.45 1.341a1 1 0 0 1 .014.111c.025.429-.323.802-1.02 1.548M16.5 8c-.476.317-1.341.71-1.45 1.341a1 1 0 0 0-.014.111c-.025.429.323.802 1.02 1.548M7 19c.473-2.282 2.532-4 5-4s4.527 1.718 5 4m-5 0v2"></svg:path><svg:path d="M8.465 16.5c0 1.988.393 4.233-1.465 5.5m8.534-5.5c0 1.98-.39 4.234 1.466 5.5"></svg:path></svg:g>`,
})
export class HugeiconsVomitingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
