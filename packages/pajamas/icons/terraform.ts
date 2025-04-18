import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasTerraformIcon],svg[pajamas-terraform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.321 7.576L1 5.051V0l4.321 2.525zM10.117 16l-4.321-2.525V8.424l4.321 2.525zM5.796 2.819l4.321 2.528v5.048L5.796 7.869V2.82Zm4.796 7.576l4.321-2.523V2.819l-4.321 2.528z"></svg:path>`,
})
export class PajamasTerraformIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
