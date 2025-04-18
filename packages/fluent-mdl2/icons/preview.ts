import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PreviewIcon],svg[fluent-mdl2-preview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1115 0l549 549v91h-640V0zm37 512h293l-293-293zm384 384V768h128v128zm0 256v-128h128v128zm0 256v-128h128v128zm0 256v-128h128v128zm0 256v-128h128v128zm-256 0v-128h128v128zm-256 0v-128h128v128zm-256 0v-128h128v128zm-256 0v-128h128v128zm-256 0v-128h128v128zm0-1024V768h128v128zm0-256V512h128v128zm0-256V256h128v128zm0-256V0h128v128zm256 0V0h128v128zm256 0V0h128v128zM256 1152v-128h128v128zm0 256v-128h128v128zm0 256v-128h128v128z"></svg:path>`,
})
export class FluentMdl2PreviewIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
