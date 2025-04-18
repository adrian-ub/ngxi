import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber6ThinIcon],svg[iconamoon-number-6-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.424 4.266a.5.5 0 1 0-.848-.532zM7.35 12.062a.5.5 0 1 0 .847.532zM16.5 15a4.5 4.5 0 0 1-4.5 4.5v1a5.5 5.5 0 0 0 5.5-5.5zM12 19.5A4.5 4.5 0 0 1 7.5 15h-1a5.5 5.5 0 0 0 5.5 5.5zM7.5 15a4.5 4.5 0 0 1 4.5-4.5v-1A5.5 5.5 0 0 0 6.5 15zm4.5-4.5a4.5 4.5 0 0 1 4.5 4.5h1A5.5 5.5 0 0 0 12 9.5zm.576-6.766L7.35 12.062l.847.532l5.227-8.328z"></svg:path>`,
})
export class IconamoonNumber6ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
