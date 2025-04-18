import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSofaIcon],svg[icon-park-outline-sofa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 21H4v14h8zm32 0h-8v14h8z"></svg:path><svg:path stroke-linecap="round" d="M36 27H12v8h24zM8 20V8h32v12M8 36v4m32-4v4"></svg:path></svg:g>`,
})
export class IconParkOutlineSofaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
