import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsLinkSlash20SolidIcon],svg[heroicons-link-slash-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.22 2.22a.75.75 0 0 1 1.06 0l4.46 4.46q.192-.268.432-.508l3-3a4 4 0 0 1 5.657 5.656l-1.225 1.225a.75.75 0 1 1-1.06-1.06l1.224-1.225a2.5 2.5 0 0 0-3.536-3.536l-3 3a2.5 2.5 0 0 0-.406.533l2.59 2.59a2.5 2.5 0 0 0-.79-1.254a.75.75 0 1 1 .977-1.138q.117.1.226.209a4 4 0 0 1 1.08 3.677l4.871 4.87a.75.75 0 1 1-1.06 1.061l-5.177-5.177l-.006-.005l-4.134-4.134l-.005-.006L2.22 3.28a.75.75 0 0 1 0-1.06m3.237 7.727a.75.75 0 0 1 0 1.06l-1.225 1.225a2.5 2.5 0 0 0 3.536 3.536l1.879-1.879a.75.75 0 1 1 1.06 1.06L8.83 16.83a4 4 0 0 1-5.657-5.657l1.224-1.225a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsLinkSlash20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
