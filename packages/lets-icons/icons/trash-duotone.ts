import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTrashDuotoneIcon],svg[lets-icons-trash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M4 7.5c0-.236 0-.354.073-.427S4.264 7 4.5 7h15c.236 0 .354 0 .427.073S20 7.264 20 7.5v.252c0 .09 0 .136-.014.176a.25.25 0 0 1-.057.092c-.03.03-.07.05-.151.091c-.651.325-.976.488-1.213.732a2 2 0 0 0-.453.733C18 9.896 18 10.26 18 10.988V16c0 1.886 0 2.828-.586 3.414S15.886 20 14 20h-4c-1.886 0-2.828 0-3.414-.586S6 17.886 6 16v-5.012c0-.728 0-1.092-.112-1.412a2 2 0 0 0-.453-.733c-.237-.244-.562-.407-1.213-.732a.6.6 0 0 1-.151-.091a.25.25 0 0 1-.057-.092C4 7.888 4 7.842 4 7.752z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M10.068 4.37c.114-.106.365-.2.715-.267A6.7 6.7 0 0 1 12 4c.44 0 .868.036 1.217.103s.6.161.715.268"></svg:path><svg:rect width="1" height="6" x="14" y="11" fill="currentColor" rx=".5"></svg:rect><svg:rect width="1" height="6" x="9" y="11" fill="currentColor" rx=".5"></svg:rect></svg:g>`,
})
export class LetsIconsTrashDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
