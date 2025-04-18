import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMinimizeScreenIcon],svg[hugeicons-minimize-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 10.002c.029-3.414.218-5.296 1.46-6.537C4.924 2 7.282 2 11.997 2s7.073 0 8.538 1.465S22 7.287 22 12.003c0 4.715 0 7.073-1.465 8.537c-1.241 1.242-3.123 1.431-6.537 1.46"></svg:path><svg:path d="M4.999 13c-1.17.035-1.868.165-2.351.648s-.613 1.18-.648 2.35M8.001 13c1.17.035 1.868.165 2.351.648s.613 1.18.648 2.35m0 3.003c-.035 1.17-.165 1.868-.648 2.351s-1.18.613-2.35.648m-3.003 0c-1.17-.035-1.868-.165-2.351-.648s-.613-1.18-.648-2.35m14.413-7.996l-2.903-.066c-.432-.01-.777-.345-.782-.757l-.031-2.644m7.331-3.773l-6.747 6.601"></svg:path></svg:g>`,
})
export class HugeiconsMinimizeScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
