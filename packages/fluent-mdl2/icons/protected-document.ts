import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ProtectedDocumentIcon],svg[fluent-mdl2-protected-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 1280v768h-896v-768h128q0-76 17-145t56-123t99-84t148-32q87 0 147 31t99 85t56 122t18 146zm-640 0h384v-64q0-40-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75zm512 128h-640v512h640zM384 1920h512v128H256V293L549 0h1243v860q-29-26-61-47t-67-37V128H603L384 347z"></svg:path>`,
})
export class FluentMdl2ProtectedDocumentIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
