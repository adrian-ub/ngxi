import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinHerokuIcon],svg[catppuccin-heroku-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 1.5h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2"></svg:path><svg:path d="M5.53 3.58L5.5 8.5s2-2 5-1v5m-5-2v2m5-9c0 1 0 1.49-1 2"></svg:path></svg:g>`,
})
export class CatppuccinHerokuIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
