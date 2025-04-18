import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phShuffleAngularThinIcon],svg[ph-shuffle-angular-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.83 181.17a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L222.34 188H168a4 4 0 0 1-3.25-1.67L85.94 76H32a4 4 0 0 1 0-8h56a4 4 0 0 1 3.25 1.67L170.06 180h52.28l-17.17-17.17a4 4 0 0 1 5.66-5.66Zm-89.49-77.44a4 4 0 0 0 5.58-.93L170.06 76h52.28l-17.17 17.17a4 4 0 0 0 5.66 5.66l24-24a4 4 0 0 0 0-5.66l-24-24a4 4 0 0 0-5.66 5.66L222.34 68H168a4 4 0 0 0-3.25 1.67l-20.34 28.48a4 4 0 0 0 .93 5.58m-34.68 48.54a4 4 0 0 0-5.58.93L85.94 180H32a4 4 0 0 0 0 8h56a4 4 0 0 0 3.25-1.67l20.34-28.48a4 4 0 0 0-.93-5.58"></svg:path>`,
})
export class PhShuffleAngularThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
