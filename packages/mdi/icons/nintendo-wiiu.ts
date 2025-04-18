import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNintendoWiiuIcon],svg[mdi-nintendo-wiiu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15.96c0 2.23 1.54 3.54 3.79 3.54h12.78c1.9 0 3.43-1.3 3.43-3.18V6.97c0-1.14-.85-2.37-1.89-2.37h-2.96v7.7c0 5.84-10.18 5.79-10.18.11V4.5H4.72C3.26 4.5 2 5.41 2 6.85zm7.34-4.73c0 4.51 5.32 3.86 5.32.71V4.5H9.34z"></svg:path>`,
})
export class MdiNintendoWiiuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
