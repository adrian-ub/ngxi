import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFullSelectionIcon],svg[icon-park-full-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M34 5H8C6.34315 5 5 6.34315 5 8V34C5 35.6569 6.34315 37 8 37H34C35.6569 37 37 35.6569 37 34V8C37 6.34315 35.6569 5 34 5Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M43.9998 13.002V42.0001C43.9998 43.1046 43.1044 44.0001 41.9998 44.0001H13.0034"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13 20.4858L18.9997 26.0109L29 15.7192"></svg:path></svg:g>`,
})
export class IconParkFullSelectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
