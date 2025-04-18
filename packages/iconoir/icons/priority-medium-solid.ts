import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPriorityMediumSolidIcon],svg[iconoir-priority-medium-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.045.893a1.35 1.35 0 0 1 1.91 0l10.151 10.152a1.35 1.35 0 0 1 0 1.91l-10.151 10.15a1.35 1.35 0 0 1-1.91 0L.894 12.956a1.35 1.35 0 0 1 0-1.91zM5.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m8.75-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirPriorityMediumSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
