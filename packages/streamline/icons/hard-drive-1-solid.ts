import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHardDrive1SolidIcon],svg[streamline-hard-drive-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.588 6.07q.237-.05.489-.05h11.846q.27 0 .52.058l-1.257-4.916A1.5 1.5 0 0 0 10.694 0H3.297a1.5 1.5 0 0 0-1.453 1.162zm12.335 1.2H1.077C.482 7.27 0 7.75 0 8.345v4.308c0 .595.482 1.077 1.077 1.077h11.846c.595 0 1.077-.482 1.077-1.077V8.346c0-.595-.482-1.077-1.077-1.077ZM3.5 9.874a.625.625 0 1 0 0 1.25h3a.625.625 0 1 0 0-1.25zm6.003.625a.997.997 0 1 1 1.994 0a.997.997 0 0 1-1.994 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHardDrive1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
