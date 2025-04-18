import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RoomIcon],svg[fluent-mdl2-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 128v1664h-442l-473 95l-237 47V779l640-128v-11H640v1152H128V128zM896 885v893l512-103V782zm896 779V256H256v1408h256V512h1024v1152z"></svg:path>`,
})
export class FluentMdl2RoomIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
