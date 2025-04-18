import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirVideoProjectorIcon],svg[iconoir-video-projector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 19h2m12 0h2"></svg:path><svg:path d="M2 16.4V7.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v8.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m5 10.01l.01-.011M8 10.01l.01-.011m2.99.011l.01-.011M5 14.01l.01-.011M8 14.01l.01-.011m2.99.011l.01-.011M17 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class IconoirVideoProjectorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
