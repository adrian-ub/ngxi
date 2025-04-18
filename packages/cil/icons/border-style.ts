import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBorderStyleIcon],svg[cil-border-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M440 440h32v32h-32zm-133.818 0h33.455v32h-33.455zm-133.818 0h33.455v32h-33.455zm200.727 0h33.455v32h-33.455zm-267.636 0h33.455v32h-33.455zM472 40H56a16 16 0 0 0-16 16v416h32V72h400Zm-32 333.091h32v33.454h-32zm0-66.909h32v33.454h-32zm0-200.728h32v33.454h-32zm0 66.909h32v33.454h-32zm0 66.909h32v33.455h-32zM239.272 440h33.455v32h-33.455z"></svg:path>`,
})
export class CilBorderStyleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
