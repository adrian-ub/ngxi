import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDragonZodiacIcon],svg[icon-park-solid-dragon-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSDragonZodiac0"><svg:g fill="none"><svg:g stroke="#fff" stroke-linecap="round" stroke-width="4" clip-path="url(#ipSDragonZodiac1)"><svg:path d="m34.021 42.494l3.74-3.74a6 6 0 0 0 0-8.485v0a6 6 0 0 0-8.485 0L27.045 32.5m-9.97-7l6.544-6.544a6 6 0 0 0 0-8.486v0a6 6 0 0 0-8.485 0l-7.071 7.071m9.012 7.959L8.77 33.806a6 6 0 0 0 0 8.485v0a6 6 0 0 0 8.485 0l9.766-9.766"></svg:path><svg:path stroke-linejoin="round" d="M13 12V4m25 26l5-5"></svg:path></svg:g><svg:defs><svg:clippath id="ipSDragonZodiac1"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDragonZodiac0)"></svg:path>`,
})
export class IconParkSolidDragonZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
