import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWavingHandIcon],svg[streamline-waving-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.044 3.938a2.86 2.86 0 0 0-.546-1.508m-9.081-.866A2.86 2.86 0 0 1 4.644.531m-1.476 11.48l-.345-.393A6 6 0 0 1 1.71 9.762l-.688-1.835A1.11 1.11 0 0 1 1.38 6.66v0a1.113 1.113 0 0 1 1.706.429l.58 1.325c.436.116 1.433.57 1.943 1.452"></svg:path><svg:path d="M3.666 8.416L5.123 2.98c.161-.6.779-.957 1.38-.796v0c.6.16.956.778.795 1.379l-.874 3.262l1.224-4.567c.16-.6.778-.957 1.379-.796v0c.6.16.957.778.796 1.378l-1.34 5.003l.757-2.828c.161-.6.778-.957 1.379-.796v0c.6.161.957.779.796 1.38l-1.709 6.376a2 2 0 0 1-.932 1.215l-.385.222"></svg:path></svg:g>`,
})
export class StreamlineWavingHandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
