import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLoadListAltIcon],svg[lets-icons-load-list-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M3 3h18M5 3h14v14.9c0 .037 0 .056-.004.073a.2.2 0 0 1-.018.043a.4.4 0 0 1-.048.054l-2.86 2.86c-.026.026-.039.039-.054.048a.2.2 0 0 1-.043.018c-.017.004-.036.004-.072.004H8.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C5 19.48 5 18.92 5 17.8z"></svg:path><svg:path d="M14 21v-4.85a.15.15 0 0 1 .15-.15H19m-7-3V7m-3 3l2.894-2.894a.15.15 0 0 1 .212 0L15 10"></svg:path></svg:g>`,
})
export class LetsIconsLoadListAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
