import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLayersIcon],svg[whh-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M985 559L607 747q-40 20-95 20t-95-20L39 559Q0 539 0 511.5T39 464l34-17l344 173q40 19 95 19t95-19l344-173l34 17q39 20 39 47.5T985 559m0-256L607 492q-40 19-95 19t-95-19L39 303Q0 283 0 255.5T39 208L417 19q40-19 95-19t95 19l378 189q39 20 39 47.5T985 303M39 720l34-17l344 172q40 20 95 20t95-20l344-172l34 17q39 20 39 47.5T985 815l-378 188q-40 20-95 20t-95-20L39 815Q0 795 0 767.5T39 720"></svg:path>`,
})
export class WhhLayersIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
