import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ChromeRestoreIcon],svg[fluent-mdl2-chrome-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1638h-410v410H0V410h410V0h1638zM1434 614H205v1229h1229zm409-409H614v205h1024v1024h205z"></svg:path>`,
})
export class FluentMdl2ChromeRestoreIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
