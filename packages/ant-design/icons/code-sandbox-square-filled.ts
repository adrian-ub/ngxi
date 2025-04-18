import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignCodeSandboxSquareFilledIcon],svg[ant-design-code-sandbox-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m307.9 536.7l87.6 49.9V681l96.7 55.9V524.8L307.9 418.4zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M755.7 653.2L512 794L268.3 653.2V371.8l110-63.6l-.4-.2h.2L512 231l134 77h-.2l-.3.2l110.1 63.6v281.4zm-223.9 83.7l97.3-56.2v-94.1l87-49.5V418.5L531.8 525zm-20-352L418 331l-91.1 52.6l185.2 107l185.2-106.9l-91.4-52.8z"></svg:path>`,
})
export class AntDesignCodeSandboxSquareFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
