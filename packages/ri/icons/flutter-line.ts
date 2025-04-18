import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFlutterLineIcon],svg[ri-flutter-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.598 10.684h2.828l-5.657 5.658l5.657 5.656h-2.828L8.94 16.341zm-.194-8.68h2.829L5.919 13.318l-1.414-1.414z"></svg:path>`,
})
export class RiFlutterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
