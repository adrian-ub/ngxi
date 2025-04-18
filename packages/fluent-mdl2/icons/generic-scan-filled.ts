import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GenericScanFilledIcon],svg[fluent-mdl2-generic-scan-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 128h512v512h-128V256h-384zM128 256v384H0V128h512v128zm1792 1536v-384h128v512h-512v-128zM256 1664V384h1536v1280zM1536 640v768h128V640zm-384 0v768h128V640zm-384 0v768h128V640zm-384 0v768h128V640zm-256 768v384h384v128H0v-512z"></svg:path>`,
})
export class FluentMdl2GenericScanFilledIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
