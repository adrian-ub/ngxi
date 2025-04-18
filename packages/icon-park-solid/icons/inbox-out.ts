import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidInboxOutIcon],svg[icon-park-solid-inbox-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 30L9 6h30l5 24"></svg:path><svg:path fill="currentColor" d="M4 30h10.91l1.817 6h14.546l1.818-6H44v13H4z"></svg:path><svg:path stroke-linecap="round" d="m18 20l6-6l6 6m-6 6V14"></svg:path></svg:g>`,
})
export class IconParkSolidInboxOutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
