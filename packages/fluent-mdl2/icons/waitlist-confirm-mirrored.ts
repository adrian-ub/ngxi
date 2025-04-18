import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2WaitlistConfirmMirroredIcon],svg[fluent-mdl2-waitlist-confirm-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1344 998l147-147l90 90l-237 237l-173-173l90-90zm-832 538h512v128H512zm512-896H512V512h512zm0 512H512v-128h512zm557-723l-237 237l-173-173l90-90l83 83l147-147zm-426 1491l128 128H256V0h1536v1283l-128 128V128H384v1792zm874-467l-557 558l-269-270l90-90l179 178l467-466z"></svg:path>`,
})
export class FluentMdl2WaitlistConfirmMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
