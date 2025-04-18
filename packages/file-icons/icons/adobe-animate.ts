import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsAdobeAnimateIcon],svg[file-icons-adobe-animate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m169.658 137.076l27.928 109.382h-55.157zM512 0v512H0V0zM271.325 356.538l-75.825-256h-52.52c-.531 13.05-1.326 15.964-2.645 20.713L73.008 356.538h40.468l19.179-71.68h74.705l19.766 71.68zm162.246-124.043c0-73.454-63.051-83.034-142.537-52.739c1.164 13.499 1.504 23.648 1.504 25.975v151.04h43.055V205.265c34.821-9.685 57.917-4.355 57.25 30.488v120.785h40.728z" clip-rule="evenodd"></svg:path>`,
})
export class FileIconsAdobeAnimateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
