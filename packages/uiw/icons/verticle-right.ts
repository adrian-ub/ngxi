import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwVerticleRightIcon],svg[uiw-verticle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.606 9.256L6.614 2.203q-.55-.438-1.012 0q-.462.437 0 .974l6.626 6.678l-6.992 6.876q-.47.455-.023.966q.449.51 1.023.02l7.37-7.245v6.836q0 .692.697.692t.697-.692V2.692q0-.7-.697-.692t-.697.692z"></svg:path>`,
})
export class UiwVerticleRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
