import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVibrateThinIcon],svg[ph-vibrate-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 36H96a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m12 164a12 12 0 0 1-12 12H96a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12Zm40-112v80a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0m32 16v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0M52 88v80a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0m-32 16v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhVibrateThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
