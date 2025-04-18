import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShieldStarLineIcon],svg[ri-shield-star-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05zM3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M12 13.5l-2.939 1.545l.561-3.272l-2.377-2.318l3.286-.478L12 6l1.47 2.977l3.285.478l-2.377 2.318l.56 3.272z"></svg:path>`,
})
export class RiShieldStarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
