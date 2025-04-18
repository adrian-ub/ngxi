import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCameraDataFoldersIcon],svg[arcticons-camera-data-folders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.46 33.75h11.58A3.96 3.96 0 0 0 24 29.79V18.21a3.96 3.96 0 0 0-3.96-3.96H8.46a3.96 3.96 0 0 0-3.96 3.96v11.58a3.96 3.96 0 0 0 3.96 3.96m19.455-19.5H43.5v3.899H27.915zm0 15.601H43.5v3.899H27.915zm0-7.801H43.5v3.899H27.915z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.17 29.9H7.38l3.55-5.82l2.36 3.884l3.38-5.794z"></svg:path>`,
})
export class ArcticonsCameraDataFoldersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
