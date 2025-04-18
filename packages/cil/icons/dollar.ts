import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilDollarIcon],svg[cil-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296 240h-80a46.222 46.222 0 1 1 0-92.444h128v-32h-68V56h-32v59.556h-28A78.222 78.222 0 0 0 216 272h80a46.274 46.274 0 0 1 46.222 46.222v3.556A46.274 46.274 0 0 1 296 368H160.593v32H244v56h32v-56h20a78.31 78.31 0 0 0 78.222-78.222v-3.556A78.31 78.31 0 0 0 296 240"></svg:path>`,
})
export class CilDollarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
