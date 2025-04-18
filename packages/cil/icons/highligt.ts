import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilHighligtIcon],svg[cil-highligt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m104 305.5l88 48V480h128V353.5l88-48V160H104ZM136 192h240v94.5l-88 48V448h-64V334.5l-88-48ZM240 32h32v72h-32zM61.775 72.403l22.627-22.628l50.912 50.912l-22.628 22.627zm314.91 28.281l50.912-50.911L450.224 72.4l-50.912 50.912z"></svg:path>`,
})
export class CilHighligtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
