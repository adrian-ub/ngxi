import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleThinIcon],svg[ph-bell-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 224a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m54.38-34a11.84 11.84 0 0 1-10.38 6H48a12 12 0 0 1-10.35-18C43.42 168 52 140.13 52 104a76 76 0 1 1 152 0c0 36.13 8.59 64 14.36 73.95a11.92 11.92 0 0 1 .02 12.05m-6.95-8C204 169.17 196 139.31 196 104a68 68 0 1 0-136 0c0 35.32-8 65.17-15.44 78a4 4 0 0 0 0 4a3.91 3.91 0 0 0 3.44 2h160a3.91 3.91 0 0 0 3.44-2a4 4 0 0 0-.01-4"></svg:path>`,
})
export class PhBellSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
