import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFileAddIcon],svg[vaadin-file-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15H2V1h6v4h4v1h1V4L9 0H1v16h12v-2h-1zM9 1l3 3H9z"></svg:path><svg:path fill="currentColor" d="M13 7h-2v2H9v2h2v2h2v-2h2V9h-2z"></svg:path>`,
})
export class VaadinFileAddIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
