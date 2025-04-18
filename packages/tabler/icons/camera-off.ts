import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCameraOffIcon],svg[tabler-camera-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8.297 4.289A1 1 0 0 1 9 4h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v8m-1.187 2.828c-.249.11-.524.172-.813.172H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1c.298 0 .58-.065.834-.181"></svg:path><svg:path d="M10.422 10.448a3 3 0 1 0 4.15 4.098M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerCameraOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
