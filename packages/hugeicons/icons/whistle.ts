import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWhistleIcon],svg[hugeicons-whistle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.103 11.525c1.449-2.087 3.965-2.66 5.434-2.524h2.523c.528.09.674.309 1.327 1.342c.12.324 2.055.106 2.563.159c.559-.541 0-1.651 1.24-1.494c2.13 0 4.169-.091 5.102.046c.386.057.571.405.627.79c.223 1.55-.043 2.685-.3 2.944c-.687 1.216-2.67 2.395-3.652 2.208c-2.834 0-3.447-.074-3.693.396l-.864 2.235c-.577 1.23-2.6 3.656-5.994 3.344s-4.87-3.026-5.172-4.314c-.303-.824-.59-3.043.86-5.132M13.49 5.003V3.002m-2.496 3.002l-.998-1m5.989 1l.998-1"></svg:path><svg:path d="M8.084 17a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class HugeiconsWhistleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
