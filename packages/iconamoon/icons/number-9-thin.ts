import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber9ThinIcon],svg[iconamoon-number-9-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.577 19.734a.5.5 0 1 0 .847.532zm6.073-7.796a.5.5 0 1 0-.847-.532zM7.5 9A4.5 4.5 0 0 1 12 4.5v-1A5.5 5.5 0 0 0 6.5 9zM12 4.5A4.5 4.5 0 0 1 16.5 9h1A5.5 5.5 0 0 0 12 3.5zM16.5 9a4.5 4.5 0 0 1-4.5 4.5v1A5.5 5.5 0 0 0 17.5 9zM12 13.5A4.5 4.5 0 0 1 7.5 9h-1a5.5 5.5 0 0 0 5.5 5.5zm-.576 6.766l5.226-8.328l-.847-.532l-5.227 8.328z"></svg:path>`,
})
export class IconamoonNumber9ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
