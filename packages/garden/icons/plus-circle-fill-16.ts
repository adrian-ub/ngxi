import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPlusCircleFill16Icon],svg[garden-plus-circle-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 1C3.36 1 0 4.36 0 8.5S3.36 16 7.5 16S15 12.64 15 8.5S11.64 1 7.5 1m4 8H8v3.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V9H3.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H7V4.5c0-.28.22-.5.5-.5s.5.22.5.5V8h3.5c.28 0 .5.22.5.5s-.22.5-.5.5"></svg:path>`,
})
export class GardenPlusCircleFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
