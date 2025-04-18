import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTextformatStrikethroughIcon],svg[tdesign-textformat-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.977 3.083C9.3 2.276 10.87 2 12.003 2c2.454 0 4.286.991 6.053 2.161l.834.553l-1.104 1.667l-.834-.552C15.279 4.722 13.855 4 12.002 4c-.87 0-2.054.222-2.983.79c-.88.536-1.522 1.363-1.522 2.709c0 .456.078.827.2 1.132l.37.929l-1.858.74l-.37-.929A5 5 0 0 1 5.497 7.5c0-2.158 1.11-3.58 2.48-4.417M4 11h16v2h-2.963c.853.801 1.463 1.932 1.463 3.504c0 2.158-1.11 3.58-2.48 4.417c-1.323.807-2.892 1.082-4.025 1.082c-2.457 0-4.286-.989-6.051-2.17l-.832-.556l1.113-1.662l.83.556c1.666 1.114 3.086 1.832 4.94 1.832c.871 0 2.054-.223 2.983-.79c.88-.536 1.522-1.363 1.522-2.71c0-1.302-.638-2.05-1.549-2.564c-.948-.536-2.116-.767-3.047-.938h-3.9V13H4z"></svg:path>`,
})
export class TdesignTextformatStrikethroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
