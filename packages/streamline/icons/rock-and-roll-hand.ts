import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRockAndRollHandIcon],svg[streamline-rock-and-roll-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.763 13.5c-1.883-.75-2.071-2.435-1.916-3.833c.107-.97.911-1.584 1.865-1.584c.895 0 2.708.004 2.708.004c.684.053 1.18.676 1.115 1.349c-.1 1.036-1.324 1.148-2.147 1.356c.631.29 1.87 1.095 1.776 1.98"></svg:path><svg:path d="m10.263 13.5l.453-.453a4 4 0 0 0 1.172-2.829V4.021c0-.748-.607-1.354-1.354-1.354v0c-.748 0-1.355.606-1.355 1.354V7c-1.615-.726-2.014-.798-3.791-.542V1.854C5.388 1.106 4.782.5 4.034.5v0c-.748 0-1.355.606-1.355 1.354v6.478"></svg:path></svg:g>`,
})
export class StreamlineRockAndRollHandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
