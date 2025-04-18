import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBinocularsDuotoneIcon],svg[ph-binoculars-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 168a40 40 0 1 1-40-40a40 40 0 0 1 40 40m88-40a40 40 0 1 0 40 40a40 40 0 0 0-40-40" opacity=".2"></svg:path><svg:path d="M237.2 151.87a47 47 0 0 0-2.35-5.45L193.26 51.8a7.8 7.8 0 0 0-1.66-2.44a32 32 0 0 0-45.26 0A8 8 0 0 0 144 55v25h-32V55a8 8 0 0 0-2.34-5.66a32 32 0 0 0-45.26 0a7.8 7.8 0 0 0-1.66 2.44L21.15 146.4a47 47 0 0 0-2.35 5.45A48 48 0 1 0 112 168V96h32v72a48 48 0 1 0 93.2-16.13M76.71 59.75a16 16 0 0 1 19.29-1v73.51a47.9 47.9 0 0 0-46.79-9.92ZM64 200a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96-141.26a16 16 0 0 1 19.29 1l27.5 62.58a47.9 47.9 0 0 0-46.79 9.93ZM192 200a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path></svg:g>`,
})
export class PhBinocularsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
