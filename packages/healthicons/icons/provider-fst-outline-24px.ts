import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsProviderFstOutline24pxIcon],svg[healthicons-provider-fst-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 2h6v6H2zm2 2v2h2V4zm12 12h6v6h-6zm2 2v2h2v-2z" clip-rule="evenodd"></svg:path><svg:path d="m8.264 8.385l.004 4.616l2-.002v-1.272l1.764 1.687l1.382-1.446l-1.656-1.583h1.24v-2zM14 12.586L12.586 14L15 16.414L16.414 15z"></svg:path></svg:g>`,
})
export class HealthiconsProviderFstOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
