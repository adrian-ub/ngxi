import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirScaleFrameEnlargeIcon],svg[iconoir-scale-frame-enlarge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 13.6V21H3.6a.6.6 0 0 1-.6-.6V13h7.4a.6.6 0 0 1 .6.6m0 7.4h3M3 13v-3m3-7H3.6a.6.6 0 0 0-.6.6V6m11-3h-4m11 7v4M18 3h2.4a.6.6 0 0 1 .6.6V6m-3 15h2.4a.6.6 0 0 0 .6-.6V18m-10-8h3v3"></svg:path>`,
})
export class IconoirScaleFrameEnlargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
