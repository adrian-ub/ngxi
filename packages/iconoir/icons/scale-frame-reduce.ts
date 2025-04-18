import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirScaleFrameReduceIcon],svg[iconoir-scale-frame-reduce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M11 15v-1.4a.6.6 0 0 0-.6-.6H9m-3 0H3m8 5v3"></svg:path><svg:path stroke-miterlimit="1.5" stroke-width="1.499" d="M20.4 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6"></svg:path><svg:path d="M16 11h-3V8"></svg:path></svg:g>`,
})
export class IconoirScaleFrameReduceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
