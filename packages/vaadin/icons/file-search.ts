import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFileSearchIcon],svg[vaadin-file-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.47V15H2V1h6v4h4v.56q.577.343.996.825L13 4L9 0H1v16h12v-1.53zM9 1l3 3H9z"></svg:path><svg:path fill="currentColor" d="m14.78 12.72l-1.92-1.92a.7.7 0 0 0-.325-.179a3 3 0 0 0 .468-1.618a3 3 0 1 0-1.371 2.52c.02.136.083.248.169.337l1.92 1.92a.75.75 0 0 0 1.059-1.061zM10 11a2 2 0 1 1-.001-3.999A2 2 0 0 1 10 11"></svg:path>`,
})
export class VaadinFileSearchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
