import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFastForwardCircleDuotoneIcon],svg[ph-fast-forward-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96M80 164V92l48 36Zm64 0V92l48 36Z" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m68.8-94.4l-48-36A8 8 0 0 0 136 92v72a8 8 0 0 0 12.8 6.4l48-36a8 8 0 0 0 0-12.8M152 148v-40l26.67 20Zm-19.2-26.4l-48-36A8 8 0 0 0 72 92v72a8 8 0 0 0 12.8 6.4l48-36a8 8 0 0 0 0-12.8M88 148v-40l26.67 20Z"></svg:path></svg:g>`,
})
export class PhFastForwardCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
