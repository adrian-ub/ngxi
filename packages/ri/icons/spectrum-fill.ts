import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSpectrumFillIcon],svg[ri-spectrum-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 2.006C21.24 2.093 22 3.25 22 12l-.005 1.2C21.908 21.24 20.75 22 12 22l-1.2-.006c-7.658-.083-8.712-1.136-8.794-8.795L2 11.691l.006-.89c.085-7.85 1.19-8.76 9.381-8.8zM8.25 7h-.583a.67.67 0 0 0-.66.568l-.006.099v3.666c0 .335.246.612.568.66l.098.007h.584a3.75 3.75 0 0 1 3.744 3.55l.006.2v.583c0 .335.246.612.568.66l.098.007h3.667a.67.67 0 0 0 .66-.568l.007-.099v-.583a8.75 8.75 0 0 0-8.492-8.746z"></svg:path>`,
})
export class RiSpectrumFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
