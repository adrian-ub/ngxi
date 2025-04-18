import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DisconnectVirtualMachineIcon],svg[fluent-mdl2-disconnect-virtual-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1277 1501l-227 227l227 227l-90 90l-227-227l-227 227l-90-90l227-227l-227-227l90-90l227 227l227-227zm-669 163l64 64l-64 64H128v-128zm640 64l64-64h480v128h-480zM128 128h1664v1152h-768v96l-64 64l-64-64v-96H128zm1536 1024V256H256v896z"></svg:path>`,
})
export class FluentMdl2DisconnectVirtualMachineIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
