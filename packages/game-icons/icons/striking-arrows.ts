import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsStrikingArrowsIcon],svg[game-icons-striking-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m136.564 31.01l239.67 149.595c-12.418 21.234-20.756 28.302-45.027 46.936l156.3-26.33l-85.603-125.474c4.936 24.85 8.85 38.5.75 60.49L136.568 31.01zM21.524 42.75l83.13 325.893c-21.017 5.232-30.98 3.262-58.875-3.96l124.046 113.45l13.426-166.844c-10.836 23.322-15.94 37.197-34.342 46.82L21.523 42.75zm64.353.215l252.2 353.16c-23.285 16.947-36.38 19.583-73.83 24.9l200.66 71.74L407.7 286.944c-2.477 33.743-2.313 53.14-20.37 74.09z"></svg:path>`,
})
export class GameIconsStrikingArrowsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
