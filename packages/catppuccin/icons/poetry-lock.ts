import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPoetryLockIcon],svg[catppuccin-poetry-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:radialgradient id="catppuccinPoetryLock0" cx="0" cy="0" r="1" gradientTransform="matrix(10.5875 0 0 10.784 4.993 -.868)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fff"></svg:stop><svg:stop offset="1"></svg:stop></svg:radialgradient></svg:defs><svg:path fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round" d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"></svg:path><svg:path fill="url(#catppuccinPoetryLock0)" d="m0 0l7.778 7.923q.104-.107.205-.215Z"></svg:path><svg:path fill="none" stroke="#91d7e3" stroke-linecap="round" stroke-linejoin="round" d="M.5.5h10a10 10 0 0 1-3.306 7.43"></svg:path><svg:path fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="m7.25 7.835l1.058 1.16l.529.58m-1.408 2.094A12.9 12.9 0 0 1 2.69 13.51L.501 10.5"></svg:path><svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M7.32 7.814A10 10 0 0 1 .5 10.5V.5z"></svg:path>`,
})
export class CatppuccinPoetryLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
