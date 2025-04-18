import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVolumeMute01Icon],svg[hugeicons-volume-mute-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 14.814V9.186c0-3.145 0-4.717-.926-5.109c-.926-.391-2.016.72-4.195 2.945c-1.13 1.152-1.773 1.407-3.379 1.407c-1.112 0-2.473-.148-3.163.907C6 9.85 6 10.566 6 12c0 1.433 0 2.15.337 2.664c.69 1.055 2.05.907 3.163.907c1.606 0 2.25.255 3.379 1.407c2.18 2.224 3.27 3.336 4.195 2.945c.926-.392.926-1.964.926-5.11" color="currentColor"></svg:path>`,
})
export class HugeiconsVolumeMute01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
