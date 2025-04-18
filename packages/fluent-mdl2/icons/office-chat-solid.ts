import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2OfficeChatSolidIcon],svg[fluent-mdl2-office-chat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 128v512H640v859l-384 384v-475H0V128zM768 768h1280v896h-256v347l-347-347H768z"></svg:path>`,
})
export class FluentMdl2OfficeChatSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
