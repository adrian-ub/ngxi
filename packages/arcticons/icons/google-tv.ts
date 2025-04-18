import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoogleTvIcon],svg[arcticons-google-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.78 39.5H9.22a4.57 4.57 0 0 1-4.595-4.532V13.032A4.57 4.57 0 0 1 9.22 8.5h29.56a4.57 4.57 0 0 1 4.595 4.532v21.936A4.57 4.57 0 0 1 38.78 39.5m-28.342-5.812h27.124V14.311H10.439Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.375 17.219a2.906 2.906 0 0 0-2.906-2.906h-3.291M34.656 39.5a2.906 2.906 0 0 0 2.906-2.906v-3.291M4.625 30.781a2.906 2.906 0 0 0 2.906 2.906h3.291M13.344 8.5a2.906 2.906 0 0 0-2.906 2.906v3.291"></svg:path>`,
})
export class ArcticonsGoogleTvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
