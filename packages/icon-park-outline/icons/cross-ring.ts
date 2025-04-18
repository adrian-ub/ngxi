import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCrossRingIcon],svg[icon-park-outline-cross-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM8 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm32 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path><svg:path stroke-linecap="round" d="M12 24h24M24 12v24m13.305-20.89a16.1 16.1 0 0 0-4.415-4.415m-17.78 0a16.1 16.1 0 0 0-4.415 4.416zM10.696 32.89a16.1 16.1 0 0 0 4.416 4.415zm22.195 4.415a16.1 16.1 0 0 0 4.415-4.415z"></svg:path></svg:g>`,
})
export class IconParkOutlineCrossRingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
