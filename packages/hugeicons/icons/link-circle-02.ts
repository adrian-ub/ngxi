import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLinkCircle02Icon],svg[hugeicons-link-circle-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.12 2.998a9.025 9.025 0 0 0-8.121 8.98A9.024 9.024 0 0 0 21 12.88m-.442-9.386l-9.51 9.565m9.51-9.565c-.494-.495-3.822-.449-4.526-.439m4.526.439c.494.495.448 3.828.438 4.532" color="currentColor"></svg:path>`,
})
export class HugeiconsLinkCircle02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
