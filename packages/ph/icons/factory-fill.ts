import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFactoryFillIcon],svg[ph-factory-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 208h-8v-72.98a1 1 0 0 0 0-.15L209 29.74A16.08 16.08 0 0 0 193.06 16h-18.12a16.08 16.08 0 0 0-15.84 13.74l-11.56 80.91L108.8 81.6A8 8 0 0 0 96 88v32L44.8 81.6A8 8 0 0 0 32 88v120h-8a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-124-24H80a8 8 0 0 1 0-16h28a8 8 0 0 1 0 16m68 0h-28a8 8 0 0 1 0-16h28a8 8 0 0 1 0 16m-5.33-56l-8.53-6.4l12.8-89.6h18.12l13.72 96Z"></svg:path>`,
})
export class PhFactoryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
