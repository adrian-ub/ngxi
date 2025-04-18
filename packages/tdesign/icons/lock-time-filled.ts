import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLockTimeFilledIcon],svg[tdesign-lock-time-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10.5V7A6 6 0 0 0 6 7v3.5H3.5V22h8.937A7 7 0 0 1 20.5 11.79V10.5zM12 3a4 4 0 0 1 4 4v3.5H8V7a4 4 0 0 1 4-4"></svg:path><svg:path fill="currentColor" d="M13 18.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m7.914 1L19.5 18.086v-1.834h-2v2.662l2 2z"></svg:path>`,
})
export class TdesignLockTimeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
