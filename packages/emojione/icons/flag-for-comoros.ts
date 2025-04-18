import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForComorosIcon],svg[emojione-flag-for-comoros-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#428bc1" d="M11 48v5.4c5.4 5.3 12.8 8.6 21 8.6c10.7 0 20.1-5.6 25.4-14z"></svg:path><svg:path fill="#ed4c5c" d="M11 32v16h46.4c2.9-4.6 4.6-10.1 4.6-16z"></svg:path><svg:path fill="#fff" d="M11 32h51c0-5.9-1.7-11.4-4.6-16H11z"></svg:path><svg:path fill="#ffce31" d="M11 16h46.4C52.1 7.6 42.7 2 32 2c-8.2 0-15.6 3.3-21 8.6z"></svg:path><svg:path fill="#75a843" d="M11 10.6C5.5 16 2 23.6 2 32s3.5 16 9 21.4L32.4 32z"></svg:path><svg:g fill="#f9f9f9"><svg:path d="M18 41.8c-4.6-.9-8-5-8-9.8s3.4-8.9 8-9.8c-.6-.1-1.3-.2-2-.2c-5.5 0-10 4.5-10 10s4.5 10 10 10c.7 0 1.4-.1 2-.2"></svg:path><svg:path d="m16.8 36l1.2-.9l1.2.9l-.4-1.5l1.2-1h-1.5L18 32l-.5 1.5H16l1.2 1zm0 4l1.2-.9l1.2.9l-.4-1.5l1.2-1h-1.5L18 36l-.5 1.5H16l1.2 1zm0-12l1.2-.9l1.2.9l-.4-1.5l1.2-1h-1.5L18 24l-.5 1.5H16l1.2 1zm0 4l1.2-.9l1.2.9l-.4-1.5l1.2-1h-1.5L18 28l-.5 1.5H16l1.2 1z"></svg:path></svg:g>`,
})
export class EmojioneFlagForComorosIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
