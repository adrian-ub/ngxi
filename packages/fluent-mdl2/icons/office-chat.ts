import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2OfficeChatIcon],svg[fluent-mdl2-office-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 1280v293l256-256v182l-384 384v-475H0V128h1792v512h-128V256H128v1024zm384-512h1280v896h-256v347l-347-347H768zm1152 768V896H896v640h603l165 165v-165z"></svg:path>`,
})
export class FluentMdl2OfficeChatIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
