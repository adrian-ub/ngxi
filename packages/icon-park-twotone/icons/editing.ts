import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneEditingIcon],svg[icon-park-twotone-editing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTEditing0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="13" cy="35" r="7" fill="#555"></svg:circle><svg:circle cx="35" cy="35" r="7" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 6l24 22m8-22L16 28"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTEditing0)"></svg:path>`,
})
export class IconParkTwotoneEditingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
