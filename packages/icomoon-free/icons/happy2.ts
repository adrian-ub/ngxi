import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeHappy2Icon],svg[icomoon-free-happy2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3 4c.552 0 1 .672 1 1.5S11.552 7 11 7s-1-.672-1-1.5s.448-1.5 1-1.5M5 4c.552 0 1 .672 1 1.5S5.552 7 5 7s-1-.672-1-1.5S4.448 4 5 4m3 10c-2.607 0-4.772-2.186-5-4.973c1.465.846 3.188 1.329 5 1.329s3.535-.481 5-1.327C12.772 11.817 10.607 14 8 14"></svg:path>`,
})
export class IcomoonFreeHappy2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
