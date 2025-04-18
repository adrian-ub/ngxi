import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilImageBrokenIcon],svg[cil-image-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 472h432V312h-32v128H72V312H40zm0-206.245l49.373 25.437l53.82-46.829l56.159 50.528L256 247.052l56.648 47.839l56.159-50.528l53.82 46.829L472 265.755V40H40ZM72 72h368v174.244l-12.738 6.564l-58.809-51.171l-56.471 50.806L256 205.167l-55.982 47.276l-56.471-50.806l-58.809 51.171L72 246.244Z"></svg:path>`,
})
export class CilImageBrokenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
