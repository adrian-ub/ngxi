import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVibrateLightIcon],svg[ph-vibrate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 34H96a22 22 0 0 0-22 22v144a22 22 0 0 0 22 22h64a22 22 0 0 0 22-22V56a22 22 0 0 0-22-22m10 166a10 10 0 0 1-10 10H96a10 10 0 0 1-10-10V56a10 10 0 0 1 10-10h64a10 10 0 0 1 10 10Zm44-112v80a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0m32 16v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0M54 88v80a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0m-32 16v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhVibrateLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
