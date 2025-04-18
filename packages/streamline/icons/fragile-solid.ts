import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFragileSolidIcon],svg[streamline-fragile-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.048 0H3.254a1.136 1.136 0 0 0-1.125 1.001L1.937 4.5c0 2.588 1.736 4.1 4.063 4.431v3.045H4.165a1 1 0 1 0 0 2h5.67a1 1 0 1 0 0-2H8V8.93c2.327-.33 4.063-1.843 4.063-4.431L11.871 1a1.136 1.136 0 0 0-1.125-1H7.534l-.009.014L6.318 1.89L7.91 3.282c.224.196.28.523.131.781l-1 1.747a.625.625 0 0 1-1.084-.62l.745-1.303l-1.614-1.41a.625.625 0 0 1-.115-.81z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFragileSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
