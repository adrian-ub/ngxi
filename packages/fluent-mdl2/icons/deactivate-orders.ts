import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DeactivateOrdersIcon],svg[fluent-mdl2-deactivate-orders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1819 1728l226 227l-90 90l-227-226l-227 227l-90-91l227-227l-227-227l90-90l227 227l227-227l90 91zM512 640H384V512h128zm0 256H384V768h128zm-128 128h128v128H384zm-128 896h1024v128H128V0h1115l549 549v731h-128V640h-512V128H256zM1280 512h293l-293-293zm-256 128H640V512h384zm0 256H640V768h384zm-384 128h384v128H640z"></svg:path>`,
})
export class FluentMdl2DeactivateOrdersIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
