import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibTerraformIcon],svg[cib-terraform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.041 5.688l9.912 5.031v10.073l-9.912-5.037zm11 5.031v10.073l9.917-5.037V5.688zM.047.068v10.068l9.912 5.036V5.104zm10.994 26.853l9.912 5.037V21.895l-9.912-5.036z"></svg:path>`,
})
export class CibTerraformIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
