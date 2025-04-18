import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBorderTopIcon],svg[cil-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 40h432v32H40zm400 400h32v32h-32zm-133.818 0h33.455v32h-33.455zm-133.818 0h33.455v32h-33.455zm200.727 0h33.455v32h-33.455zm-267.636 0h33.455v32h-33.455zM40 440h32v32H40zm0-133.817h32v33.454H40zm0 66.909h32v33.454H40zm0-133.82h32v33.455H40zm0-66.908h32v33.454H40zm0-66.909h32v33.454H40zm400 267.636h32v33.454h-32zm0-66.909h32v33.454h-32zm0-200.728h32v33.454h-32zm0 66.909h32v33.454h-32zm0 66.909h32v33.455h-32zm-200.728 0h33.455v33.455h-33.455zm0 66.91h33.455v33.454h-33.455zm0-133.819h33.455v33.454h-33.455zm0-66.909h33.455v33.454h-33.455zm0 267.637h33.455v33.454h-33.455zm0 66.909h33.455v32h-33.455zm66.91-200.728h33.455v33.455h-33.455zm66.909 0h33.455v33.455h-33.455zm-200.727 0h33.455v33.455h-33.455zm-66.909 0h33.455v33.455h-33.455z"></svg:path>`,
})
export class CilBorderTopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
