import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirGraduationCapSolidIcon],svg[iconoir-graduation-cap-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M3.75 12.641v3.271a2.75 2.75 0 0 0 1.57 2.484l5 2.374a2.75 2.75 0 0 0 2.36 0l5-2.374a2.75 2.75 0 0 0 1.57-2.484v-3.27l-6.475 3.237a2.85 2.85 0 0 1-2.55 0z"></svg:path><svg:path d="M10.896 3.464c.38-.19.828-.19 1.208 0l8.658 4.329c.995.497.995 1.917 0 2.415l-8.658 4.33c-.38.19-.828.19-1.208 0l-8.658-4.33c-.995-.498-.995-1.918 0-2.415z"></svg:path><svg:path d="M19.83 8.165a.75.75 0 0 1 1.006-.336l2 1a.75.75 0 0 1 .414.671V13a.75.75 0 1 1-1.5 0V9.964l-1.585-.793a.75.75 0 0 1-.336-1.006"></svg:path></svg:g>`,
})
export class IconoirGraduationCapSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
