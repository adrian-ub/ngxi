import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTerraformIcon],svg[mdi-terraform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5.4v6.4L15.4 15V8.7zm-6.2 3.3V15l-5.6-3.2V5.4zm0 7v6.4l-5.6-3.2v-6.4zM8.6 5.1v6.4L3 8.3V1.9z"></svg:path>`,
})
export class MdiTerraformIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
