import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ImageDiffIcon],svg[fluent-mdl2-image-diff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 0v1920H0V0zM128 896h933L576 410L128 859zm1573 0l-293-293l-230 229l65 64zM128 1792h933l-485-486l-448 449zm1115 0h458l-293-293l-230 229zm677-768H128v549l448-447l512 512l320-321l475 475h37zm0-128V128H128v549l448-447l512 512l320-321l475 475z"></svg:path>`,
})
export class FluentMdl2ImageDiffIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
