import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFireExtinguisherOneIcon],svg[icon-park-outline-fire-extinguisher-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 18a8 8 0 1 1 16 0v24a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-linecap="round" d="M24 24v10"></svg:path><svg:path d="M20 5h9v4h-9zm9 0l9-1v6l-9-1z"></svg:path><svg:path stroke-linecap="round" d="M20 7c-3 0-7.5-.5-10 2c-2.417 2.416-2 5-2 9"></svg:path></svg:g>`,
})
export class IconParkOutlineFireExtinguisherOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
