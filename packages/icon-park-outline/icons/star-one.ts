import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineStarOneIcon],svg[icon-park-outline-star-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.871 33.044l-.873 11.66c-.062.82.667 1.383 1.318 1.018c4.613-2.584 19.062-12.074 26.386-32.932c.336-.957-.567-1.82-1.337-1.28c-4.326 3.03-13.78 9.29-19.623 10.484c0 0 3.742-2.6 5.981-6.588a1.2 1.2 0 0 0-.043-1.245L20.513 2.389c-.484-.697-1.478-.408-1.652.481l-2.543 12.937L4.384 26.223c-.598.522-.476 1.577.215 1.856zm21.104-4.596c-.756 1.055-2.384 3.224-3.887 4.55c-.3.265-.26.709.084.925l7.943 4.986c.478.3 1.123-.056 1.043-.576c-.37-2.383-1.434-7.351-4.125-9.959c-.3-.29-.819-.26-1.059.074" clip-rule="evenodd"></svg:path>`,
})
export class IconParkOutlineStarOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
