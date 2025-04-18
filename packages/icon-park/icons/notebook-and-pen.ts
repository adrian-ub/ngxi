import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNotebookAndPenIcon],svg[icon-park-notebook-and-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 6V42H30V6H4Z"></svg:path><svg:path stroke="#fff" d="M12 42V6"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 6H36V38L40 42L44 38V6Z"></svg:path><svg:path stroke="#fff" d="M36 12H44"></svg:path><svg:path stroke="#000" d="M30 6H4"></svg:path><svg:path stroke="#000" d="M30 42H4"></svg:path><svg:path stroke="#000" d="M36 6V22"></svg:path><svg:path stroke="#000" d="M44 6V22"></svg:path></svg:g>`,
})
export class IconParkNotebookAndPenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
