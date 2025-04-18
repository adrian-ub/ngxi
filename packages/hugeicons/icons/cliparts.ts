import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsClipartsIcon],svg[hugeicons-cliparts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.37 11.949c-.2-.62-.58-1.01-1.24-1.67l-7.67-7.67c-.64-.64-1.03-1.02-1.66-1.23c-.62-.2-1.08-.13-1.81 0C4.78 2.239 1 6.699 1 11.989c0 5.93 4.83 10.76 10.76 10.76c5.29 0 9.75-3.78 10.62-9c.12-.71.19-1.17-.01-1.8m-2.39-.7c-3.62-.01-5.12-.12-6.24-1.24c-1.12-1.13-1.23-2.63-1.24-6.25l7.48 7.48zm.92 2.27a9.23 9.23 0 0 1-9.14 7.73c-5.11 0-9.26-4.15-9.26-9.26c0-4.55 3.25-8.39 7.78-9.15c.35-.06.56-.09.72-.09c0 4.68.03 6.66 1.68 8.32c1.65 1.65 3.63 1.68 8.31 1.68c0 .17-.03.39-.09.77" color="currentColor"></svg:path>`,
})
export class HugeiconsClipartsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
