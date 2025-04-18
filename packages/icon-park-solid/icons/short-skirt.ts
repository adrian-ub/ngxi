import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShortSkirtIcon],svg[icon-park-solid-short-skirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShortSkirt0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="m12 9l5-5h14l5 5l7 26s-3 9-19 9s-19-9-19-9z"></svg:path><svg:path stroke="#000" d="m13 42l4-16"></svg:path><svg:path stroke="#fff" d="M5 35s3 9 19 9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShortSkirt0)"></svg:path>`,
})
export class IconParkSolidShortSkirtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
