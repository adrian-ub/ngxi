import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPhotoSparkIcon],svg[tabler-photo-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 8h.01M12 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6"></svg:path><svg:path d="m3 16l5-5c.928-.893 2.072-.893 3 0l3.993 3.993"></svg:path><svg:path d="m14 14l1-1c.47-.452.995-.675 1.52-.67M19 22.5a4.75 4.75 0 0 1 3.5-3.5a4.75 4.75 0 0 1-3.5-3.5a4.75 4.75 0 0 1-3.5 3.5a4.75 4.75 0 0 1 3.5 3.5"></svg:path></svg:g>`,
})
export class TablerPhotoSparkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
