import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsOpenindianaIcon],svg[file-icons-openindiana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M194.16 346.705c-81.476-2.23-130.152-92.253-87.406-161.651s143.452-67.955 182.182 3.674s-13.3 160.207-94.776 157.977m72.618-143.874c-28.897-54.551-104.711-57.715-136.605-4.863s2.21 123.341 65.453 124.194c60.79 1.698 100.048-64.78 71.152-119.331M369.663 78.15c0-16.537-17.928-26.93-32.192-18.66s-14.265 29.051 0 37.32c14.264 8.268 32.192-2.124 32.192-18.66m-8.044 60.773h-26.492v202.905h26.492zM86.264 319.569c-176.216 115.067-74.113 200.104 230.198 71.265c217.755-92.192 276.011-231.329 59.388-191.171l3.393 2.262c184.95-37.895 146.49 89.364-89.364 181.556c-179.294 76.922-390.262 79.75-202.86-60.11z"></svg:path>`,
})
export class FileIconsOpenindianaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
