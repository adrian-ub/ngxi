import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilFlipIcon],svg[cil-flip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296 40h32v32h-32zm72 0h32v32h-32zm-72 400h32v32h-32zm72 0h32v32h-32zm72-400h32v32h-32zm0 65.454h32v33.454h-32zm0 66.909h32v33.454h-32zm0 200.728h32v33.454h-32zm0-133.819h32v33.454h-32zm0 66.91h32v33.454h-32zM440 440h32v32h-32zM40 456a16 16 0 0 0 16 16h168v24h32V16h-32v24H56a16 16 0 0 0-16 16ZM72 72h152v368H72Z"></svg:path>`,
})
export class CilFlipIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
