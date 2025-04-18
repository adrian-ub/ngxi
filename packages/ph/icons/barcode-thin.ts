import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBarcodeThinIcon],svg[ph-barcode-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 48v40a4 4 0 0 1-8 0V52h-36a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4M72 204H36v-36a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4h40a4 4 0 0 0 0-8m152-40a4 4 0 0 0-4 4v36h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4M32 92a4 4 0 0 0 4-4V52h36a4 4 0 0 0 0-8H32a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4m48-8a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4m100 4a4 4 0 0 0-8 0v80a4 4 0 0 0 8 0Zm-36-4a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4m-32 0a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhBarcodeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
