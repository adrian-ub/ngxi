import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamStarFullIcon],svg[jam-star-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 16.207l-6.173 3.246l1.179-6.874L.01 7.71l6.902-1.003L10 .453l3.087 6.254l6.902 1.003l-4.995 4.869l1.18 6.874z"></svg:path>`,
})
export class JamStarFullIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
