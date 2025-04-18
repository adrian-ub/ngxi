import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLayersEditIcon],svg[mdi-layers-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.63 10.27L3 9l9-7l7.94 6.17l-7.44 7.44l-.5.39zM10 18.94v-.83l.59-.58l.04-.03l-6.01-4.69L3 14.07l7 5.43zm11.7-6.36l-1.28-1.28a.55.55 0 0 0-.77 0l-1 1l2.05 2.05l1-1a.55.55 0 0 0 0-.77M12 21h2.06l6.05-6.07l-2.05-2.05L12 18.94z"></svg:path>`,
})
export class MdiLayersEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
