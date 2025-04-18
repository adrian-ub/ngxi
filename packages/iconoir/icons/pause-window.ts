import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPauseWindowIcon],svg[iconoir-pause-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9"></svg:path><svg:path stroke-linejoin="round" d="M19 17v5m3-5v5M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirPauseWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
