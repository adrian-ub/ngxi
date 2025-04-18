import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDatabase24Icon],svg[fluent-color-database-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDatabase240)" d="M18.328 7.117A7.6 7.6 0 0 0 20 6v12c0 2.21-3.582 4-8 4s-8-1.79-8-4V6c.502.45 1.084.823 1.672 1.117c1.697.848 3.936 1.33 6.328 1.33s4.63-.482 6.328-1.33"></svg:path><svg:path fill="url(#fluentColorDatabase241)" fill-opacity=".7" d="M18.328 7.117A7.6 7.6 0 0 0 20 6v12c0 2.21-3.582 4-8 4s-8-1.79-8-4V6c.502.45 1.084.823 1.672 1.117c1.697.848 3.936 1.33 6.328 1.33s4.63-.482 6.328-1.33"></svg:path><svg:path fill="url(#fluentColorDatabase242)" d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4"></svg:path><svg:defs><svg:lineargradient id="fluentColorDatabase240" x1="7.777" x2="16.435" y1="2.396" y2="20.577" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#29C3FF"></svg:stop><svg:stop offset="1" stop-color="#367AF2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDatabase241" x1="14.476" x2="17.647" y1="7.965" y2="23.721" gradientUnits="userSpaceOnUse"><svg:stop offset=".533" stop-color="#FF6CE8" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDatabase242" x1="26" x2="16.755" y1="14" y2="-2.828" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#58AAFE"></svg:stop><svg:stop offset="1" stop-color="#6CE0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDatabase24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
