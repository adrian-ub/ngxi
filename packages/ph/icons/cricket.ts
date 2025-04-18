import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCricketIcon],svg[ph-cricket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.31 81.37l-52.68-52.68a16 16 0 0 0-22.63 0L60.69 136a16 16 0 0 0 0 22.63l20.68 20.68l-47 47a8 8 0 0 0 11.32 11.32l47-47l20.68 20.68a16 16 0 0 0 22.63 0L243.31 104a16 16 0 0 0 0-22.63M124.69 200L104 179.31l29.66-29.65a8 8 0 0 0-11.32-11.32L92.69 168L72 147.31L107.31 112H160v52.69ZM232 92.69l-56 56V104a8 8 0 0 0-8-8h-44.69l56-56L232 92.68ZM60 88a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12"></svg:path>`,
})
export class PhCricketIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
