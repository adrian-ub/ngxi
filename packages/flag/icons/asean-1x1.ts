import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagAsean1x1Icon],svg[flag-asean-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0039a6" d="M0 0h512v512H0z"></svg:path><svg:circle cx="256" cy="256" r="153.6" fill="#fff"></svg:circle><svg:circle cx="256" cy="256" r="146.4" fill="#ed2939"></svg:circle><svg:use href="#flagAsean1x10" transform="matrix(-1 0 0 1 512 0)"></svg:use><svg:g id="flagAsean1x10" fill="#f9e300"><svg:path d="M295.424 256c25.6-15.36 37.376-46.08 37.376-76.8h-11.776v1.024c0 10.24-1.536 47.616-29.696 75.776a112.64 112.64 0 0 1 29.696 75.776v1.024H332.8c0-30.72-12.288-61.44-37.376-76.8"></svg:path><svg:path d="M317.44 180.224V179.2h-12.288v1.536c0 10.24-2.048 46.08-22.016 75.264c20.48 29.184 22.016 65.024 22.016 75.264v1.536h12.288v-1.024c0-10.24-2.56-47.616-29.696-75.776a112.64 112.64 0 0 0 29.696-75.776"></svg:path><svg:path d="m278.528 256l1.024-1.024a138.24 138.24 0 0 0 21.504-74.24V179.2h-11.264v2.048c0 10.752-1.536 45.056-15.36 74.752a194.6 194.6 0 0 1 15.36 74.752v2.048h11.264v-1.536c0-10.24-1.024-42.496-21.504-74.24"></svg:path><svg:path d="M270.336 256a189.4 189.4 0 0 0 15.36-76.8H273.92v3.584c0 12.8-1.024 44.032-7.68 73.216a358.4 358.4 0 0 1 7.68 73.216v3.584h11.264v-2.048c0-10.752-1.024-46.08-14.336-74.24"></svg:path><svg:path d="M262.144 256a353.3 353.3 0 0 0 7.168-73.216V179.2h-11.264v153.6h11.264v-3.584c0-12.288 0-44.032-7.168-72.704"></svg:path></svg:g>`,
})
export class FlagAsean1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
