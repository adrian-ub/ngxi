import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSharetronixIcon],svg[whh-sharetronix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 128q-87 0-160.5 34.5t-116.5 93T64 384q0 63 50.5 122.5t133 96.5T416 640q13 0 22.5 9.5T448 672t-9.5 22.5T416 704q-105 0-201-47T59.5 528T0 352q0-96 51.5-177t140-128T384 0q108 0 223 45.5T768 160l-128 96q-35-59-101.5-93.5T384 128m0 768q87 0 160.5-34.5t116.5-93T704 640q0-63-50.5-122.5t-133-96.5T352 384q-13 0-22.5-9.5T320 352t9.5-22.5T352 320q105 0 201 47t155.5 129T768 672q0 96-51.5 177t-140 128t-192.5 47q-108 0-223-45.5T0 864l128-96q35 59 101.5 93.5T384 896"></svg:path>`,
})
export class WhhSharetronixIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
