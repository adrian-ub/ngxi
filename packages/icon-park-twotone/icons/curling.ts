import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCurlingIcon],svg[icon-park-twotone-curling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCurling0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M38 42H10c-3.31 0-6-2.68-6-6v-8c0-3.31 2.68-6 6-6h28c3.31 0 6 2.68 6 6v8c0 3.32-2.68 6-6 6Z"></svg:path><svg:path stroke-linecap="round" d="M4 32h40"></svg:path><svg:path fill="#555" stroke-linecap="round" d="m10 22l6.48-14.8A1.98 1.98 0 0 1 18.31 6H35.5C37.43 6 39 7.57 39 9.5S37.43 13 35.5 13H22v9z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCurling0)"></svg:path>`,
})
export class IconParkTwotoneCurlingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
