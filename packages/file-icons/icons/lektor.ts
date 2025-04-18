import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsLektorIcon],svg[file-icons-lektor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v512h29.525c41.14-27.294 84.641-54.706 144.094-77.65c0 0-94.819-31.52-79.318-145.914C108.46 183.925 218.805 63.795 311.639 73.48c81.834 8.539 95.91 118.13 77.771 203.76c-19.553 92.31-75.781 137.158-75.781 137.158c27.49 5.27 53.839 14.092 73.35 44.22c-1.917 10.351-7.514 14.587-10.588 19.437C319.433 405.379 174.767 456.78 84.89 512H512V0z"></svg:path>`,
})
export class FileIconsLektorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
