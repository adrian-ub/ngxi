import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineNailPolishOneIcon],svg[icon-park-outline-nail-polish-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="24" x="8" y="20" rx="2"></svg:rect><svg:path d="M17 4h14v16H17zm5 28h4l1 5h-6zm2-12v12m7-12H17"></svg:path></svg:g>`,
})
export class IconParkOutlineNailPolishOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
