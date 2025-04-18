import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilLayersIcon],svg[cil-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m487.938 162.108l-224-128a16 16 0 0 0-15.876 0l-224 128a16 16 0 0 0 .382 28l224 120a16 16 0 0 0 15.112 0l224-120a16 16 0 0 0 .382-28M256 277.849L65.039 175.548L256 66.428l190.961 109.12Z"></svg:path><svg:path fill="currentColor" d="M263.711 394.02L480 275.061v-36.522L256 361.74L32 238.539v36.522L248.289 394.02a16 16 0 0 0 15.422 0"></svg:path><svg:path fill="currentColor" d="m32 362.667l216.471 115.451a16 16 0 0 0 15.058 0L480 362.667V326.4L256 445.867L32 326.4Z"></svg:path>`,
})
export class CilLayersIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
