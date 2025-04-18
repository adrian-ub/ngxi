import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPayByCheckIcon],svg[hugeicons-pay-by-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 11H6c-3.31 0-4 .69-4 4v3c0 3.31.69 4 4 4h12c3.31 0 4-.69 4-4v-3c0-2.211-.308-3.253-1.5-3.701M12 18h6"></svg:path><svg:path d="M17.244 3.133c.447-.485.67-.728.908-.87a1.86 1.86 0 0 1 1.862-.027c.242.134.472.37.933.841c.46.472.691.707.823.954a1.98 1.98 0 0 1-.028 1.905c-.138.243-.375.472-.85.93l-5.642 5.442c-1.494 1.441-2.42 1.74-4.49 1.686c-.377-.01-.565-.015-.674-.139s-.094-.316-.064-.7c.137-1.767.449-2.673 1.652-3.978z"></svg:path></svg:g>`,
})
export class HugeiconsPayByCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
