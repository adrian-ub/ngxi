import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTtlChangerIcon],svg[arcticons-ttl-changer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.925 13.575L4.5 24l10.425 10.425m18.15-20.85L43.5 24L33.075 34.425M15.492 22.298h3.403v3.404h-3.403zm13.613 0h3.403v3.404h-3.403zm-6.807 0h3.404v3.404h-3.404z"></svg:path>`,
})
export class ArcticonsTtlChangerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
