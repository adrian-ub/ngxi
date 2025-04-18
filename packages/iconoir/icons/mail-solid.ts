import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMailSolidIcon],svg[iconoir-mail-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4.25A2.75 2.75 0 0 0 1.25 7v10A2.75 2.75 0 0 0 4 19.75h16A2.75 2.75 0 0 0 22.75 17V7A2.75 2.75 0 0 0 20 4.25zm3.43 4.136a.75.75 0 0 0-.86 1.228l5 3.5a.75.75 0 0 0 .86 0l5-3.5a.75.75 0 1 0-.86-1.228L12 11.585z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirMailSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
