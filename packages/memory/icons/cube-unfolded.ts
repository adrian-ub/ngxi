import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCubeUnfoldedIcon],svg[memory-cube-unfolded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v5h10v7h-5v5h-7v-5H0V8h5V3zm-2 2H7v3h3zm-3 5v3h3v-3zm-2 0H2v3h3zm12 0v3h3v-3zm-2 5h-3v3h3zm-3-5v3h3v-3z"></svg:path>`,
})
export class MemoryCubeUnfoldedIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
