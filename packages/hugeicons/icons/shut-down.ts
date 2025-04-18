import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShutDownIcon],svg[hugeicons-shut-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.258 10c0 .41.34.75.75.75s.75-.34.75-.75V3c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm-9 2c0 5.377 4.364 9.745 9.74 9.75h-.01h.02h-.01c5.375-.005 9.74-4.373 9.74-9.75c0-3.66-2.02-6.98-5.27-8.67a.746.746 0 0 0-1.01.32c-.19.37-.05.82.32 1.01a8.23 8.23 0 0 1 4.47 7.33c0 4.55-3.7 8.25-8.25 8.25s-8.25-3.7-8.25-8.25c0-3.09 1.72-5.9 4.47-7.33c.37-.19.51-.64.32-1.01a.746.746 0 0 0-1.01-.32A9.74 9.74 0 0 0 2.258 12" color="currentColor"></svg:path>`,
})
export class HugeiconsShutDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
