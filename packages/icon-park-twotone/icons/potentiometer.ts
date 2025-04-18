import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePotentiometerIcon],svg[icon-park-twotone-potentiometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPotentiometer0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:ellipse cx="24" cy="20" fill="#555" rx="20" ry="8"></svg:ellipse><svg:path d="M24 4v15m-8 15v8m8-8v10m8-10v8M4 20v12.364s1.11 2.397 4.5 4.665M44 20v12.364s-1.11 2.397-4.5 4.665"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPotentiometer0)"></svg:path>`,
})
export class IconParkTwotonePotentiometerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
