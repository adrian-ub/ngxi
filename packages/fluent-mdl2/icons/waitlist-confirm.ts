import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2WaitlistConfirmIcon],svg[fluent-mdl2-waitlist-confirm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 640h-512V512h512zm-512 384h512v128h-512zm131 896l128 128H256V0h1536v1283l-128 128V128H384v1792zM941 429L704 666L531 493l90-90l83 83l147-147zm0 512l-237 237l-173-173l90-90l83 83l147-147zm-237 569l147-147l90 90l-237 237l-173-173l90-90zm1325-57l-557 558l-269-270l90-90l179 178l467-466z"></svg:path>`,
})
export class FluentMdl2WaitlistConfirmIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
