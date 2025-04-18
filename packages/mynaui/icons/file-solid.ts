import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFileSolidIcon],svg[mynaui-file-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 5.25a3 3 0 0 1 3-3h2.228c1.093 0 2.245.393 3.327.987c1.09.598 2.159 1.428 3.098 2.368s1.767 2.006 2.364 3.092c.591 1.077.983 2.221.983 3.303v6.75a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zm12.481 3.788a13 13 0 0 0-1.889-2.373a13 13 0 0 0-2.38-1.894q.038.234.038.479V7.5a1.5 1.5 0 0 0 1.5 1.5h2.25q.246 0 .481.038"></svg:path>`,
})
export class MynauiFileSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
