import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneNotebookAndPenIcon],svg[icon-park-twotone-notebook-and-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTNotebookAndPen0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M4 6v36h26V6z"></svg:path><svg:path d="M12 42V6"></svg:path><svg:path fill="#555" d="M44 6h-8v32l4 4l4-4z"></svg:path><svg:path d="M36 12h8M30 6H4m26 36H4M36 6v16m8-16v16"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTNotebookAndPen0)"></svg:path>`,
})
export class IconParkTwotoneNotebookAndPenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
