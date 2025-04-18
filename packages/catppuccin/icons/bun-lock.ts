import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinBunLockIcon],svg[catppuccin-bun-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8087a2" d="M15 11.51c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.27.22-.5.5-.5zm-4 0v-1.5a1.5 1.5 0 1 1 3 0v1.5"></svg:path><svg:path stroke="#f4dbd6" d="M14.5 7.01c0-3.69-4.2-5.57-7-6.5c-2.8.93-7 2.81-7 6.5c0 4.85 5.13 5.5 7 5.5"></svg:path><svg:path stroke="#ee99a0" d="M5.5 8.51h4c-.67.67-1.33 1-2 1s-1.33-.33-2-1"></svg:path><svg:path stroke="#cad3f5" d="M5 6.51a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m5 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class CatppuccinBunLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
