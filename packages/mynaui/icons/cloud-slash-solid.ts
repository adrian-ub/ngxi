import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudSlashSolidIcon],svg[mynaui-cloud-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.596 9.388c2.05.177 3.997 1.285 5.063 2.803c.59.842.932 1.844.82 2.9c-.113 1.066-.677 2.087-1.713 2.975c-1.116.957-2.676 1.184-3.894 1.184H8.026c-.656 0-1.3-.105-1.91-.305L3.53 21.53a.75.75 0 0 1-1.06-1.06l2.21-2.21a6.1 6.1 0 0 1-1.374-1.221c-2-2.263-2.424-4.666-1.773-6.796c.64-2.09 2.28-3.812 4.216-4.86c1.935-1.046 4.267-1.472 6.354-.831c1.403.431 2.64 1.328 3.54 2.745L20.47 2.47a.75.75 0 1 1 1.06 1.06l-5.175 5.176q.13.328.24.682"></svg:path>`,
})
export class MynauiCloudSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
