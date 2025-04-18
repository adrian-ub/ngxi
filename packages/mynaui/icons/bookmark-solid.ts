import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkSolidIcon],svg[mynaui-bookmark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 2.25c-.979 0-1.5.926-1.5 1.692v16.01c0 1.352 1.469 2.308 2.686 1.518l3.945-2.561a.21.21 0 0 1 .238 0l3.945 2.561c1.217.79 2.686-.165 2.686-1.518V3.942c0-.766-.521-1.692-1.5-1.692z"></svg:path>`,
})
export class MynauiBookmarkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
