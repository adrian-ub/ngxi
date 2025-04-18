import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUploadStroke12Icon],svg[garden-upload-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m4.5 8l1.6-1.6c.2-.2.5-.2.7 0L8.5 8m-2 2.5v-4m2 4c1.7-.1 3-1.5 3-3.2C11.5 5.5 10 4 8.2 4h-.3c-.3-1.4-1.6-2.5-3.1-2.5C3 1.5 1.5 3 1.5 4.8c0 .4.1.8.2 1.1C1 6.3.5 7.1.5 8c0 1.4 1.1 2.5 2.5 2.5h1.5"></svg:path>`,
})
export class GardenUploadStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
