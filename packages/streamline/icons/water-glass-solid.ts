import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWaterGlassSolidIcon],svg[streamline-water-glass-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.175.277a.75.75 0 0 1 .56-.25h10.53a.75.75 0 0 1 .746.836l-.545 4.71v.003l-.7 6.039a2.665 2.665 0 0 1-2.662 2.358H4.877a2.665 2.665 0 0 1-2.662-2.358v-.002l-.689-6.038L.99.862a.75.75 0 0 1 .186-.585Zm10.249 1.25l-.372 3.213H2.941l-.366-3.213z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWaterGlassSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
