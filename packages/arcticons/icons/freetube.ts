import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFreetubeIcon],svg[arcticons-freetube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 42.5h3v-35a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v27a8 8 0 0 0 8 8m3-35v7a2 2 0 0 0 2 2h16a8 8 0 0 0 8-8v-3h-24a2 2 0 0 0-2 2m13.908 15.492l-12.485-5.828a1 1 0 0 0-1.423.906v11.655a1 1 0 0 0 1.423.906l12.485-5.827a1 1 0 0 0 0-1.813Z"></svg:path>`,
})
export class ArcticonsFreetubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
