import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexRemoveBackgroundIcon],svg[codex-remove-background-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="M11 19c-1.864 0-2.796 0-3.53-.305a4 4 0 0 1-2.166-2.164C5 15.796 5 14.864 5 13v-1c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5h1.5c1.396 0 2.093 0 2.661.172a4 4 0 0 1 2.667 2.667C19 8.407 19 9.104 19 10.5v0"></svg:path><svg:path d="M19.119 14.879L16.997 17m-2.121 2.121L16.997 17m2.122 2.121L16.997 17m0 0l-2.121-2.121"></svg:path><svg:path stroke-linejoin="round" d="m6.5 17.5l11-11m1.492 4h.01m-8.01 8.5h.01M5 13l8-8"></svg:path></svg:g>`,
})
export class CodexRemoveBackgroundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
