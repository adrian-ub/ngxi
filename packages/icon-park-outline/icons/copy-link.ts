import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCopyLinkIcon],svg[icon-park-outline-copy-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M12 9.927V7a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3h-2.983"></svg:path><svg:rect width="34" height="34" x="4" y="10" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="m18.44 23.11l5.292-5.51c1.451-1.451 3.837-1.42 5.328.072s1.523 3.877.072 5.328l-1.91 2.023m-13.756 3.724c-.51.51-1.565 1.53-1.565 1.53c-1.452 1.451-1.492 4.038 0 5.53c1.49 1.49 3.876 1.523 5.328.071l5.164-4.688"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18.663 28.328a3.86 3.86 0 0 1-1.131-2.473A3.67 3.67 0 0 1 18.592 23m3.729 2.861c1.491 1.491 1.523 3.877.072 5.329"></svg:path></svg:g>`,
})
export class IconParkOutlineCopyLinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
