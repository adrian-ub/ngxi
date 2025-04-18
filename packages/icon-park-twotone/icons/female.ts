import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFemaleIcon],svg[icon-park-twotone-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFemale0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M38.379 9.851c-5.468-5.467-14.332-5.467-19.8 0a13.96 13.96 0 0 0-4.1 9.9a13.96 13.96 0 0 0 4.1 9.9c5.468 5.467 14.332 5.467 19.8 0c5.467-5.468 5.467-14.332 0-19.8Z"></svg:path><svg:path stroke-linecap="round" d="M18.464 29.535L5.736 42.263m13.435-.707L6.443 28.828"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFemale0)"></svg:path>`,
})
export class IconParkTwotoneFemaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
