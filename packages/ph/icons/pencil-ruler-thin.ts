import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPencilRulerThinIcon],svg[ph-pencil-ruler-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4v-36h28a4 4 0 0 0 0-8h-28v-32h28a4 4 0 0 0 0-8h-28V92h28a4 4 0 0 0 0-8h-28V48a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4ZM74.83 29.17a4 4 0 0 0-5.66 0l-32 32A4 4 0 0 0 36 64v144a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V64a4 4 0 0 0-1.17-2.83ZM44 76h24v104H44Zm56 132a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-20h56Zm0-28H76V76h24Zm0-112H44v-2.34l28-28l28 28Z"></svg:path>`,
})
export class PhPencilRulerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
