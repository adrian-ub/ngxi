import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGhostSmileFillIcon],svg[ri-ghost-smile-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a9 9 0 0 1 9 9v7.5a3.5 3.5 0 0 1-6.39 1.976a2.999 2.999 0 0 1-5.223 0a3.5 3.5 0 0 1-6.382-1.783L3 18.499V11a9 9 0 0 1 9-9m4 11h-2a2 2 0 0 1-3.995.15L10 13H8l.005.2a4 4 0 0 0 7.99 0zm-4-6a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class RiGhostSmileFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
