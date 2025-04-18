import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBeltThinIcon],svg[ph-belt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 164h-60V92h60a4 4 0 0 0 0-8h-60.7a12 12 0 0 0-11.3-8h-64a12 12 0 0 0-11.3 8H60v-4a4 4 0 0 0-8 0v4H8a4 4 0 0 0 0 8h44v72H8a4 4 0 0 0 0 8h44v4a4 4 0 0 0 8 0v-4h40.7a12 12 0 0 0 11.3 8h64a12 12 0 0 0 11.3-8H248a4 4 0 0 0 0-8M60 92h40v72H60Zm116 80h-64a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4v36h-36a4 4 0 0 0 0 8h36v36a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhBeltThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
