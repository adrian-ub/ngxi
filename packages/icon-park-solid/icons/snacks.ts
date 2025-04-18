import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSnacksIcon],svg[icon-park-solid-snacks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M6 14h36V8h-4l-2-4H12l-2 4H6z"></svg:path><svg:path stroke-linecap="round" d="m36 44l2-30H10l2 30z"></svg:path></svg:g>`,
})
export class IconParkSolidSnacksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
