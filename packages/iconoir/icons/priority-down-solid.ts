import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPriorityDownSolidIcon],svg[iconoir-priority-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.955.893a1.35 1.35 0 0 0-1.91 0L.894 11.045a1.35 1.35 0 0 0 0 1.91l10.151 10.15a1.35 1.35 0 0 0 1.91 0l10.151-10.15a1.35 1.35 0 0 0 0-1.91zM12.53 16.53a.75.75 0 0 1-1.071-.01l-4-4.167a.75.75 0 1 1 1.082-1.04l2.709 2.823V7a.75.75 0 0 1 1.5 0v7.19l2.72-2.72a.75.75 0 1 1 1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirPriorityDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
