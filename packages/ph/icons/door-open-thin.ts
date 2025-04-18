import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDoorOpenThinIcon],svg[ph-door-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 220h-28V40a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v180H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8M196 40v180h-24V36h20a4 4 0 0 1 4 4M60 40a4 4 0 0 1 4-4h100v184H60Zm80 92a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDoorOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
