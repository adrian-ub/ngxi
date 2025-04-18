import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBrightnessIcon],svg[iconoir-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="1.5"><svg:path stroke="currentColor" d="m12 7l1.53 1.304l2.006.16l.16 2.005L17 12l-1.305 1.53l-.16 2.006l-2.004.16L12 17l-1.53-1.305l-2.006-.16l-.16-2.004L7 12l1.304-1.53l.16-2.006l2.005-.16z"></svg:path><svg:path fill="currentColor" d="M10.47 15.696L12 17V7l-1.53 1.304l-2.006.16l-.16 2.005L7 12l1.304 1.53l.16 2.006z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path></svg:g>`,
})
export class IconoirBrightnessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
