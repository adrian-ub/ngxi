import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsTerraformIcon],svg[file-icons-terraform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m158.692 271.29l141.528 80.865V512l-141.528-80.867zm0-17.337L300.22 334.82V171.54L158.692 90.673zm155.577-82.662v164.862l142.937-82.143V89.713zM144.643 82.646L0 0v165.366l144.643 82.646z"></svg:path>`,
})
export class FileIconsTerraformIcon {
  readonly viewBox = input("0 0 458 512")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
