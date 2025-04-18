import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilAsteriskIcon],svg[cil-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M286.903 256L416 177.877v-36.762l-.283-.469L272 227.617V72h-32v155.617L96.283 140.646l-.283.469v36.762L225.097 256L96 334.123v36.762l.283.469L240 284.383V440h32V284.383l143.717 86.971l.283-.469v-36.762z"></svg:path>`,
})
export class CilAsteriskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
