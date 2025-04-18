import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsPencilSolidIcon],svg[rivet-icons-pencil-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.707 1L15 3.292a1 1 0 0 1-.002 1.416l-1.441 1.434l-3.702-3.703L11.293 1a1 1 0 0 1 1.414 0M8.44 3.854L1.5 10.793v3.652h3.706l6.932-6.893z"></svg:path>`,
})
export class RivetIconsPencilSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
