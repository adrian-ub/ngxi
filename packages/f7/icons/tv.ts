import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7TvIcon],svg[f7-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.454 43.096h45.092c3.629 0 5.454-1.74 5.454-5.453V13.324c0-3.713-1.825-5.453-5.454-5.453H5.454C1.824 7.87 0 9.61 0 13.324v24.319c0 3.713 1.825 5.453 5.454 5.453m.063-3.416c-1.443 0-2.1-.594-2.1-2.08V13.388c0-1.507.657-2.1 2.1-2.1h44.966c1.464 0 2.1.593 2.1 2.1V37.6c0 1.486-.636 2.08-2.1 2.08Zm37.92 9.315c0-1.103-.89-1.994-1.973-1.994h-26.97c-1.083 0-1.953.89-1.953 1.994s.87 1.995 1.952 1.995h26.97a1.99 1.99 0 0 0 1.974-1.995"></svg:path>`,
})
export class F7TvIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
