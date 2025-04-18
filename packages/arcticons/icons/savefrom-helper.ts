import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSavefromHelperIcon],svg[arcticons-savefrom-helper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.122 5.5h-8.543c-5.988 0-10.922 1.856-10.922 11.35v10.18l-4.494-1.369L19.915 42.5l10.752-16.839l-5.266 1.604V16.85c0-9.494 3.538-11.35 7.833-11.35c2.435 0 5.916 2.682 5.58 10.736c-2.246-4.555-5.725-9.393-10.516-9.15"></svg:path>`,
})
export class ArcticonsSavefromHelperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
