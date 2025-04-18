import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRainLightIcon],svg[lets-icons-rain-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12 12.5H6v1h6zm6 0h-6v1h6zm2.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5zM18 7.5a2.5 2.5 0 0 1 2.5 2.5h1A3.5 3.5 0 0 0 18 6.5zm-.98-1.75A5.5 5.5 0 0 0 12 2.5v1a4.5 4.5 0 0 1 4.108 2.66zM12 2.5a5.5 5.5 0 0 0-5.02 3.25l.912.41A4.5 4.5 0 0 1 12 3.5zm-6 4A3.5 3.5 0 0 0 2.5 10h1A2.5 2.5 0 0 1 6 7.5zM2.5 10A3.5 3.5 0 0 0 6 13.5v-1A2.5 2.5 0 0 1 3.5 10zm4.48-4.25c-.209.464-.595.75-.98.75v1c.895 0 1.577-.637 1.892-1.34zM18 6.5c-.385 0-.771-.286-.98-.75l-.912.41c.316.703.997 1.34 1.892 1.34z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M12 19v-2m5 3v-3M7 21v-4"></svg:path></svg:g>`,
})
export class LetsIconsRainLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
